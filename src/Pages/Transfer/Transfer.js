import React, {useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Card from '../../Components/Cards/Card';
import CardBody from '../../Components/Cards/CardBody';
import CustomView from '../../Components/View/CustomView';
import FooterBottomLine from '../../Components/Footer/FooterBottomLine';
import {signNumber} from '../../Utils/utils';
import TextButton from '../../Components/Button/TextButton';
import {PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';
import Loader from '../../Components/Loader/Loader';
import TransferHeaderIcons from './components/HeaderIcons';
import CustomButton from '../../Components/Button/Button';
import SearchInput from '../../Components/Input/SearchInput';
import VerticalContact from '../../Components/Cards/VerticalContact';
import HorizontalContact from '../../Components/Cards/HorizontalContact';

const curveWidth = Dimensions.get('window').width;

export default function TransferScreen() {
  const [contacts, setContacts] = useState({
    data: [],
    rendered: [],
  });
  const [load, setLoad] = useState(false);
  const [active, setActive] = useState('mobile');
  const [search, setSearch] = useState({
    focus: false,
    value: '',
  });

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Cool Photo App Camera Permission',
          message: 'Allow Bankee to access your contacts',
          buttonNegative: 'Cancel',
          buttonPositive: 'Allow',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setLoad(true);
        Contacts.getAll()
          .then((contacts) => {
            console.log(contacts);
            let data = contacts
              .filter((o, i) => i < 40)
              .map((item) => ({
                id: item.recordID,
                name: item.givenName,
                hasThumb: item.hasThumbnail,
                thumb: item.thumbnailPath,
                number: item.phoneNumbers.map((item) => item.number),
              }));
            setSearch('');
            setContacts({
              rendered: data,
              data,
            });
            setTimeout(() => {
              setLoad(false);
            }, 1200);
          })
          .catch((err) => {
            setTimeout(() => {
              setLoad(false);
            }, 1200);
            console.log(err);
          });
      } else {
        console.log('permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  useEffect(() => {
    requestCameraPermission();
  }, []);

  const handleSearch = (value) => {
    setSearch((prev) => ({...prev, value}));
    const filteredData = contacts.data.filter(
      (item) =>
        (item.name !== null &&
          item.name.toLowerCase().includes(value.toLowerCase())) ||
        (item.number !== null &&
          item.number.toString().toLowerCase().includes(value.toLowerCase())),
    );
    setContacts((prev) => ({...prev, rendered: filteredData}));
    console.log(filteredData);
  };

  return (
    <CustomView style={styles.container} secondary>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Transfer</Text>

          <View style={styles.headerRow}>
            <View>
              <TransferHeaderIcons
                onPress={() => setActive('mobile')}
                state={active}
                activeState="mobile"
                icon="user"
                label="Mobile"
              />
            </View>

            <View>
              <TransferHeaderIcons
                onPress={() => setActive('bank')}
                state={active}
                activeState="bank"
                icon="bank"
                label="Bank"
              />
            </View>

            <View>
              <TransferHeaderIcons
                onPress={() => setActive('online')}
                state={active}
                activeState="online"
                icon="wifi"
                label="Online"
              />
            </View>

            <View>
              <TransferHeaderIcons
                onPress={() => setActive('qrCode')}
                state={active}
                activeState="qrCode"
                icon="qrcode"
                label="QR Code"
              />
            </View>
          </View>
        </View>
        <View style={{paddingLeft: 25}}>
          <Text style={styles.title}>Recent</Text>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            alwaysBounceHorizontal={true}
            horizontal={true}>
            {load ? (
              <Loader size="small" />
            ) : (
              contacts.data
                .filter((o, i) => i < 10)
                .map((item) => (
                  <Card
                    key={item.id}
                    style={{marginRight: 15, width: curveWidth * 0.34}}>
                    <HorizontalContact
                      name={item.name}
                      number={item.number[0]}
                    />
                  </Card>
                ))
            )}
          </ScrollView>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            paddingHorizontal: 25,
            paddingVertical: 20,
            marginTop: 25,
          }}>
          <Text style={[styles.title, {marginTop: 0}]}>All Contacts</Text>
          <View style={{marginBottom: 5}}>
            <SearchInput
              placeholder={'search name or number..'}
              onChangeText={handleSearch}
              value={search.value}
              onBlur={() => setSearch((prev) => ({...prev, focus: false}))}
              onFocus={() => setSearch((prev) => ({...prev, focus: true}))}
              focus={search.focus}
            />
          </View>
          <View>
            {load ? (
              <Loader />
            ) : contacts.rendered.length > 1 ? (
              contacts.rendered.map((item) => (
                <VerticalContact
                  key={item.id}
                  name={item.name}
                  number={item.number[0]}
                  hasIcon={item.hasThumb}
                  uri={item.thumb}
                  showInvite={true}
                />
              ))
            ) : (
              <Text style={[styles.text, {textAlign: 'center'}]}>
                There is no contact to display
              </Text>
            )}
          </View>
        </View>
      </ScrollView>
    </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9FB',
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#7165E3',
    width: curveWidth,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    paddingHorizontal: 45,
    paddingBottom: 20,
    paddingTop: 15,
  },
  headerTitle: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    lineHeight: 26.04,
    marginBottom: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  headerIconHolder: {
    padding: 10,
    width: 40,
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#665AD9',
    borderRadius: 10,
  },
  headerIcon: {
    fontSize: 15,
  },
  scoreViewText: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 22,
    lineHeight: 28.6,
  },
  scoreViewSubtext: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    lineHeight: 25,
    opacity: 0.8,
  },
  row: {
    flexDirection: 'row',
  },
  rowCard: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#1C1939',
    fontSize: 18,
    lineHeight: 23,
    marginTop: 20,
    marginBottom: 15,
  },
  subTitle: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#9EA6BE',
    fontSize: 16,
    lineHeight: 20.83,
    marginBottom: 10,
  },
  text: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#1C1939',
    fontSize: 13,
    lineHeight: 20,
    flexShrink: 1,
    marginBottom: 15,
  },
  scoreHolder: {
    padding: 5,
    width: 50,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7165E3',
    borderRadius: 16,
    marginRight: 20,
  },
  scoreText: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#fff',
    fontSize: 15,
    lineHeight: 20,
  },
});
