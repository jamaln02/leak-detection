"use client"
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { changePassword, closeChangePasswordModal } from '@/ReduxSystem/Slices/passwordSlice';
import { openLoginModal, showPassword } from '@/ReduxSystem/Slices/authSlice';

const ChangePasswordModal = () => {
  const isOpen = useSelector((state) => state.password.isChangePasswordModal);
  const dispatch = useDispatch();
  const { isShowPassword } = useSelector((state) => state.auth);

  const validationSchema = Yup.object({
    password: Yup.string()
      .min(8, 'كلمة المرور يجب أن تكون على الأقل 8 أحرف')
      .required('يرجى إدخال كلمة المرور'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'كلمة المرور غير متطابقة')
      .required('يرجى تأكيد كلمة المرور')
  });

  const handleSubmit = (values) => {
    dispatch(changePassword(values.password));
    dispatch(closeChangePasswordModal())
    dispatch(openLoginModal())
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center !z-50">
          <div className="bg-white rounded-[32px] shadow-lg w-[80%] md:w-[50%] lg:w-[40%] relative p-8">
            <button
              onClick={() => dispatch(closeChangePasswordModal())}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
            >
              <img src={"close-icon.svg"} alt="Close" width={15} height={15} />
            </button>

            <h2 className="text-[28px] font-medium text-center mb-6">تغيير كلمة المرور</h2>

            <Formik
              initialValues={{
                password: '',
                confirmPassword: ''
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ setFieldValue }) => (
                <Form className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm mb-2 font-bold">كلمة المرور</label>
                    <div className="w-full flex items-center justify-between border border-[#F8F8FF] rounded-lg px-4 py-2">
                      <Field
                        name="password"
                        type={isShowPassword ? "text" : "password"}
                        className="w-full focus:outline-none"
                      />
                      <img
                        src={"eye.svg"}
                        width={20}
                        height={20}
                        alt="eye icon"
                        className="cursor-pointer"
                        onClick={() => dispatch(showPassword())}
                      />
                    </div>
                    <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 font-bold">تأكيد كلمة المرور</label>
                    <div className="w-full flex items-center justify-between border border-[#F8F8FF] rounded-lg px-4 py-2">
                      <Field
                        name="confirmPassword"
                        type={isShowPassword ? "text" : "password"}
                        className="w-full focus:outline-none"
                      />
                      <img
                        src={"eye.svg"}
                        width={20}
                        height={20}
                        alt="eye icon"
                        className="cursor-pointer"
                        onClick={() => dispatch(showPassword())}
                      />
                    </div>
                    <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-xs mt-1" />
                  </div>
                  <button type="submit" className="w-full bg-second hover:bg-blue-600 text-white py-2 rounded-3xl font-bold">
                    تأكيد
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </>
  );
};

export default ChangePasswordModal;
