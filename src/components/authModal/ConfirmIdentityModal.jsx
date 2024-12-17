"use client"
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form,ErrorMessage } from 'formik';
import * as Yup from "yup";
import { openForgetPasswordModal } from '@/ReduxSystem/Slices/authSlice';
import { closeConfirmIdModal } from '@/ReduxSystem/Slices/otpSlice';
import { openChangePasswordModal } from '@/ReduxSystem/Slices/passwordSlice';

const ConfirmIdentityModal = () => {

    const isOpen = useSelector((state) => state.otp.isConfirmIdModalOpen);
    const dispatch = useDispatch();

    const initialValues = {
        otp1: "",
        otp2: "",
        otp3: "",
        otp4: ""
    };

    const otp1Ref = useRef(null);
    const otp2Ref = useRef(null);
    const otp3Ref = useRef(null);
    const otp4Ref = useRef(null);

 const validationSchema = Yup.object({
    otp1: Yup.string().required("يجب ملأ جميع الحقول "),
    otp2: Yup.string().required("يجب ملأ جميع الحقول "),
    otp3: Yup.string().required("يجب ملأ جميع الحقول "),
    otp4: Yup.string().required("يجب ملأ جميع الحقول ")
  });
    const handleOtpChange = (e, nextInputRef) => {
        if (e.target.value.length === 1) {
            nextInputRef.current?.focus();
        }
    };

    // const handleSubmit = async (values) => {
    //     const enteredOtp = `${values.otp1}${values.otp2}${values.otp3}${values.otp4}`;
        

    //     const response = await verifyOtp(enteredOtp);

    //     if (response.success) {
    //         console.log("OTP صحيح");
    //         dispatch(switchToChangePassword());  
    //     } else {
    //         console.log("OTP غير صحيح");

    //         alert(response.message || "الكود المرسل غير صحيح. يرجى المحاولة مرة أخرى.");
    //     }
    // };


    const handleSubmit = (values) => {
        dispatch(closeConfirmIdModal())
        dispatch(openChangePasswordModal(values))
    };
    const toEditNumber=()=>{
        dispatch(closeConfirmIdModal())
        dispatch(openForgetPasswordModal())
    }
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center !z-50 " >
                    <div className="bg-white rounded-[32px] shadow-lg w-[80%] md:w-[50%] lg:w-[40%]  relative p-8">
                        <button
                            onClick={() => dispatch(closeConfirmIdModal())}
                            className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
                        >
                            <img src={"close-icon.svg"} alt="Close" width={15} height={15} />
                        </button>

                        <h2 className="text-[28px] font-medium text-center mb-6">
                            تاكيد الهوية
                        </h2>
                        <p className='text-[#ABABAB] text-center mb-6'>
                            ادخل الكود المرسل اليك من خلال رقم الهاتف
                        </p>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ values, handleBlur, handleChange,errors }) => {
                                const isOtpError = errors.otp1 && errors.otp2 && errors.otp3 && errors.otp4;
                                return(
                                <Form className="flex flex-col gap-4">
                                    <div>
                                        <label
                                            onClick={toEditNumber}
                                            className="block text-second text-sm mb-2 font-bold cursor-pointer"
                                        >
                                            تعديل رقم الهاتف
                                        </label>
                                        <div className="flex items-center gap-2">
                                            <Field
                                                type="text"
                                                name="otp1"
                                                className="w-1/6 border border-[#F8F8FF] rounded-lg py-3 px-2 text-center focus:outline-none"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.otp1}
                                                maxLength={1} 
                                                innerRef={otp1Ref} 
                                                onKeyUp={(e) => handleOtpChange(e, otp2Ref)}  
                                            />
                                            <Field
                                                type="text"
                                                name="otp2"
                                                className="w-1/6 border border-[#F8F8FF] rounded-lg py-3 px-2 text-center focus:outline-none"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.otp2}
                                                maxLength={1}
                                                innerRef={otp2Ref}
                                                onKeyUp={(e) => handleOtpChange(e, otp3Ref)}
                                            />
                                            <Field
                                                type="text"
                                                name="otp3"
                                                className="w-1/6 border border-[#F8F8FF] rounded-lg py-3 px-2 text-center focus:outline-none"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.otp3}
                                                maxLength={1}
                                                innerRef={otp3Ref}
                                                onKeyUp={(e) => handleOtpChange(e, otp4Ref)}
                                            />
                                            <Field
                                                type="text"
                                                name="otp4"
                                                className="w-1/6 border border-[#F8F8FF] rounded-lg py-3 px-2 text-center focus:outline-none"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.otp4}
                                                maxLength={1}
                                                innerRef={otp4Ref}
                                            />
                                        </div>
                                        {isOtpError && <ErrorMessage name={"otp1"} component="div"className="text-red-500 md:text-sm text-xs"/>}
                                    </div>
                                    <button type="submit" className="w-full bg-second hover:bg-blue-600 text-white py-2 rounded-3xl font-bold">
                                        ارسال
                                    </button>
                                </Form>
                            )}}
                        </Formik>
                    </div>
                </div>
            )}
        </>
    )
}

export default ConfirmIdentityModal;
