import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';

const HomeScreen = () => {
  const scrollViewRef = useRef<ScrollView | null>(null);
  const [value, setValue] = useState('0');
  const [bracketOpen, setBracketOpen] = useState(false);
  const handlePress = (val: any) => {
    console.log('Pressed', val);
    if (val == 'AC') {
      setValue('0');
    } else if (val == '=') {
      try {
        if (
          (value.match(/\(/g) || []).length == (value.match(/\)/g) || []).length
        ) {
          if (
            value.slice(-1) == '+' ||
            value.slice(-1) == '-' ||
            value.slice(-1) == '*' ||
            value.slice(-1) == '/' ||
            value.slice(-1) == '%' ||
            value.slice(-1) == '.'
          ) {
            setValue(`${eval(value.replace('()', '(0)').slice(0, -1))}`);
          } else {
            setValue(`${eval(value.replace('()', '(0)'))}`);
          }
        } else {
          console.log('Unequal Brackets');
        }
      } catch (e) {
        setValue('Format Error');
      }
    } else if (val == '()') {
      if (value == '0') {
        setValue('(');
        setBracketOpen(true);
      } else if (
        value.slice(-1) == '+' ||
        value.slice(-1) == '-' ||
        value.slice(-1) == '*' ||
        value.slice(-1) == '/' ||
        value.slice(-1) == '%' ||
        value.slice(-1) == '.'
      ) {
        setValue(value + '(');
        setBracketOpen(true);
      } else {
        if (bracketOpen == true) {
          setValue(value + ')');
          setBracketOpen(false);
        } else {
          setValue(value + '(');
          setBracketOpen(true);
        }
      }
    } else if (val == 'back') {
      setValue(value.slice(0, -1));
    } else if (value == 'Format Error') {
      setValue(val);
    } else if (val === '%') {
      try {
        setValue(`${eval(value + '/100')}`);
      } catch (e) {
        setValue('Format Error');
      }
    } else {
      if (value == '0') {
        if (
          isNaN(val)
          //   val == '+' ||
          //   val == '-' ||
          //   val == '*' ||
          //   val == '/' ||
          //   val == '%' ||
          //   val == '.'
        ) {
          setValue(value + val);
        } else {
          setValue(val);
        }
      } else if (isNaN(val)) {
        if (
          value.slice(-1) == '+' ||
          value.slice(-1) == '-' ||
          value.slice(-1) == '*' ||
          value.slice(-1) == '/' ||
          value.slice(-1) == '%' ||
          value.slice(-1) == '.'
        ) {
          setValue(value.slice(0, -1) + val);
        } else {
          setValue(value + val);
        }
      } else {
        setValue(value + val);
      }
    }
  };
  return (
    <View style={styles.main_container}>
      <ScrollView
        style={styles.main_screen_display}
        ref={scrollViewRef}
        onContentSizeChange={() => {
          if (scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd({animated: true});
          }
        }}>
        <Text style={styles.display_text}>{value}</Text>
      </ScrollView>
      <View style={styles.main_screen_keypad}>
        <View style={styles.keypad_row}>
          <Pressable onPress={() => handlePress('AC')}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_btn}>AC</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => handlePress('back')}>
            <View style={styles.btn4_outer}>
              <Text style={styles.bg2_btn}>&lt;</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('%')}>
            <View style={styles.btn3_outer}>
              <Text style={styles.bg3_btn}>%</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('/')}>
            <View style={styles.btn3_outer}>
              <Text style={styles.bg3_btn}>/</Text>
            </View>
          </Pressable>
        </View>
        {/* ----------------------------------------- */}
        <View style={styles.keypad_row}>
          <Pressable onPress={() => handlePress('7')}>
            <View style={styles.saffron_outer}>
              <Text style={styles.bg2_btn}>7</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('8')}>
            <View style={styles.saffron_outer}>
              <Text style={styles.bg2_btn}>8</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('9')}>
            <View style={styles.saffron_outer}>
              <Text style={styles.bg2_btn}>9</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('*')}>
            <View style={styles.btn3_outer}>
              <Text style={styles.bg3_btn}>*</Text>
            </View>
          </Pressable>
        </View>
        {/* -------------------------------------------- */}
        <View style={styles.keypad_row}>
          <Pressable onPress={() => handlePress('6')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_btn}>6</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('5')}>
            <View style={styles.blue_outer}>
              <Text style={styles.bg2_btn}>5</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('4')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_btn}>4</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('-')}>
            <View style={styles.btn3_outer}>
              <Text style={styles.bg3_btn}>-</Text>
            </View>
          </Pressable>
        </View>
        {/* ---------------------------------------- */}
        <View style={styles.keypad_row}>
          <Pressable onPress={() => handlePress('3')}>
            <View style={styles.green_outer}>
              <Text style={styles.bg2_btn}>3</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('2')}>
            <View style={styles.green_outer}>
              <Text style={styles.bg2_btn}>2</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('1')}>
            <View style={styles.green_outer}>
              <Text style={styles.bg2_btn}>1</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('+')}>
            <View style={styles.btn3_outer}>
              <Text style={styles.bg3_btn}>+</Text>
            </View>
          </Pressable>
        </View>
        {/* ------------------------------------ */}
        <View style={styles.keypad_row}>
          <Pressable onPress={() => handlePress('0')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_btn}>0</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('.')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_btn}>.</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('()')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_btn}>( )</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress('=')}>
            <View style={styles.btn3_outer}>
              <Text style={styles.bg3_btn}>=</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main_container: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  main_screen_display: {
    elevation: 10,
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 10,
    display: 'flex',
    padding: 10,
    marginBottom: 10,
  },
  display_text: {fontSize: 50, textAlign: 'right'},
  main_screen_keypad: {width: '100%', height: '75%', display: 'flex'},
  keypad_row: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  btn1_outer: {
    width: 90,
    height: 90,
    backgroundColor: '#FF5757',
    borderRadius: 90,
    elevation: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg1_btn: {color: 'white', fontSize: 30, borderRadius: 20, fontWeight: 'bold'},
  bg2_btn: {
    // backgroundColor: 'white',
    color: 'black',
    fontSize: 30,
    borderRadius: 20,
  },
  bg3_btn: {
    // backgroundColor: 'white',
    color: 'white',
    fontSize: 30,
    borderRadius: 20,
    fontWeight: 'bold',
  },
  btn2_outer: {
    width: 90,
    height: 90,
    backgroundColor: 'white',
    elevation: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  btn3_outer: {
    width: 90,
    height: 90,
    backgroundColor: 'grey',
    elevation: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
  },
  btn4_outer: {
    width: 90,
    height: 90,
    backgroundColor: '#fcba03',
    elevation: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
    fontWeight: 'bold',
  },
  //================================
  saffron_outer: {
    width: 90,
    height: 90,
    backgroundColor: '#FF671F',
    elevation: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  blue_outer: {
    width: 90,
    height: 90,
    backgroundColor: '#06038D',
    elevation: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  green_outer: {
    width: 90,
    height: 90,
    backgroundColor: '#046A38',
    elevation: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});
