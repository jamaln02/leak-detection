"use client";
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { openConfirmIdModal } from '@/ReduxSystem/Slices/otpSlice';
import { closeForgetPassModal } from '@/ReduxSystem/Slices/authSlice';

const ForgetPasswordModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.auth.isForgetModalOpen);

  const initialValues = {
    phone_code: "+966",
    phone: "",
  };

  const validationSchema = Yup.object({
    phone_code: Yup.string().required("رمز الدولة مطلوب"),
    phone: Yup.string()
      .matches(/^[0-9]{7}$/, "رقم الهاتف غير صحيح")
      .required("رقم الهاتف مطلوب"),
  });
const handleSubmit =(values) => {
    dispatch(openConfirmIdModal(values));
    dispatch(closeForgetPassModal())
  }
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center !z-50">
          <div className="bg-white rounded-[32px] shadow-lg w-[80%] md:w-[50%] lg:w-[40%] relative p-8">
            <button
              onClick={() => dispatch(closeForgetPassModal())}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
            >
              <img src={"close-icon.svg"} alt="Close" width={15} height={15} />
            </button>
            <h2 className="text-[28px] font-medium text-center mb-6">
              هل نسيت كلمة المرور؟
            </h2>
            <p className="text-[#ABABAB] text-center mb-6">
              قم بادخال البريد الإلكتروني او رقم الهاتف الخاص بك لتغيير كلمة المرور
            </p>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm mb-2 font-bold">رقم الهاتف</label>
                    <div className="flex md:flex-row-reverse flex-col items-start md:items-center gap-2">
                      <Field
                        type="tel"
                        name="phone"
                        className="w-[100%] border border-[#F8F8FF] rounded-lg py-3 px-10 focus:outline-none"
                      />
                      <div className="flex items-center border border-[#F8F8FF] rounded-lg py-3 px-2 font-bold focus:outline-none w-1/3">
                        <Field as="select" name="phone_code" className="left-3 top-[0.75rem] w-14 text-sm">
                          <option>+966</option>
                          <option>+971</option>
                          <option>+20</option>
                        </Field>
                        <img src="Saudi Arabia.png" alt="Saudi Arabia" width={30} height={20} />
                      </div>
                    </div>
                    <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-second hover:bg-blue-600 text-white py-2 rounded-3xl font-bold"
                  >
                    إرسال
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

export default ForgetPasswordModal;
