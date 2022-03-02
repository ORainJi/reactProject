import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Container, Content, Form, Item, Input, Label, Button, Icon } from 'native-base';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const validateSchema = Yup.object().shape({
  name: Yup.string().required('กรุณาป้อนชื่อสกุล'),
  email: Yup.string().email('รูปแบบไม่ถูกต้อง').required('กรุณากรอกใหม่อีกครั้ง'),
  password: Yup.string().min(6, 'รหัสผ่ารต้องมี 6 ตัวอักษรขึ้นไป').required('กรุณากรอกรหัสผ่านใหม่อีกครั้ง'),
});

const RegisterScreen = ({navigation}) => {
  return (
    <Container>
      <Content padder>
        <Formik
          //ค่าเริ่มต้นของข้อมูลโดยกำหนดให้ตรงกับ backend
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          validationSchema={validateSchema}
          //เมิ่อคลิแมห้ทำงาน
          onSubmit={async(values,{setSubmitting}) => {
            // same shape as initial values
            //alert(JSON.stringify(values))
            try {
              const url ='https://api.codingthailand.com/api/register';
              const res = await axios.post(url,{
                name : values.name,
                email : values.email,
                password : values.password
              })
              alert(res.data.message)
              navigation.navigate('Home')
            } catch (error) {//ถ้าไม่สามารถบันทึกลงเซิฟ
              alert(error.response.data.errors.email[0]);
            }finally{
              setSubmitting(false);
            }
          }}
        >
          {/* // errors for state(when dont input) */}
          {({ errors, touched ,values, handleChange, handleBlur,handleSubmit,isSubmitting}) => (
            <Form>
              <Item fixedLabel error={errors.name && touched.name?true:false}>
                <Label>Name</Label>
                <Input 
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                />
                {errors.name && touched.name &&<Icon name='close-circle'/> }
                
              </Item>
              {
                  errors.name && touched.name &&(
                    <Item>
                      <Label style={{color:'red'}}>{errors.name}</Label>
                    </Item>
                  )
                }
              <Item fixedLabel error={errors.email && touched.email?true:false}>
                <Label>Email</Label>
                <Input 
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                keyboardType='email-address'
                />
                {errors.email && touched.email &&<Icon name='close-circle'/> }
               
              </Item>
              {
                  errors.email && touched.email &&(
                    <Item>
                      <Label style={{color:'red'}}>{errors.email}</Label>
                    </Item>
                  )
                }
              <Item fixedLabel error={errors.password && touched.password?true:false}>
                <Label>Password</Label>
                <Input 
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                keyboardType='number-pad'
                secureTextEntry={true}
                />
                {errors.password && touched.password &&<Icon name='close-circle'/> }
                
              </Item>
              {
                  errors.password && touched.password &&(
                    <Item>
                      <Label style={{color:'red'}}>{errors.password}</Label>
                    </Item>
                  )
                }
              <Button 
              onPress={handleSubmit}
              //for open or close button
              disabled = {isSubmitting}
              block large style={{ marginTop: 30, backgroundColor: '#FFE4E1' }}>
                <Text style={{
                  color: '#4682B4',
                  fontSize: 15,
                  fontWeight: 'bold'
                }}>Register</Text>
              </Button>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
