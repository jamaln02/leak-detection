"use client";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  closeLoginModal,
  switchModal,
  showPassword,
  loginUser,
  openForgetPasswordModal,
} from "@/ReduxSystem/Slices/authSlice";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.auth.isLoginModalOpen);
  const { isShowPassword } = useSelector((state) => state.auth);


  const validationSchema = Yup.object({
    phone_code: Yup.string()
      .matches(/^(00966|966|\+966|05|5)$/g, "رمز الدولة غير صحيح")
      .required("رمز الدولة مطلوب"),
    phone: Yup.string()
      .matches(/^[0-9]{7,10}$/, "رقم الهاتف غير صحيح")
      .required("رقم الهاتف مطلوب"),
    password: Yup.string().required("كلمة المرور مطلوبة"),
  });
  const initialValues = {
    phone_code: "+966",
    phone: "",
    password: "",
  };
  const toForgetModal=()=>{
    dispatch(closeLoginModal())
    dispatch(openForgetPasswordModal())
  }
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center !z-50">
          <div className="bg-white rounded-[32px] shadow-lg w-[80%] md:w-[50%] lg:w-[40%] relative p-8">
            <button
              onClick={() => dispatch(closeLoginModal())}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
            >
              <Image src={"close-icon.svg"} alt="Close" width={15} height={15} />
            </button>
            <h2 className="text-base md:text-[28px] font-medium text-center mb-6">
              تسجيل الدخول
            </h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                dispatch(loginUser(values))
                dispatch(closeLoginModal());
                resetForm(); 
              }}
            >
              {() => (
                <Form className="flex flex-col gap-4">
                  <div>
                    <label className="block md:text-sm text-xs mb-2 font-bold">
                      رقم الهاتف
                    </label>
                    <div className="flex md:flex-row flex-col gap-2">
                      <div className="flex items-center border border-[#F8F8FF] rounded-lg py-3 px-2 w-1/3">
                        <Field
                          as="select"
                          name="phone_code"
                          dir="ltr"
                          className="md:text-sm text-xs focus:outline-none"
                        >
                          <option value="+966">+966</option>
                          <option value="+971">+971</option>
                          <option value="+20">+20</option>
                        </Field>
                        <Image
                          src={"/Saudi Arabia.png"}
                          alt="country"
                          width={30}
                          height={20}
                        />
                      </div>
                      <Field
                        type="text"
                        name="phone"
                        className="w-full border border-[#F8F8FF] rounded-lg py-3 px-4 focus:outline-none"
                      />
                    </div>
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-500 md:text-sm text-xs"
                    />
                  </div>
                  <div>
                    <label className="block md:text-sm text-xs mb-2 font-bold">
                      كلمة المرور
                    </label>
                    <div className="flex items-center border border-[#F8F8FF] rounded-lg px-4 py-2">
                      <Field
                        type={isShowPassword ? "text" : "password"}
                        name="password"
                        className="w-full focus:outline-none"
                      />
                      <img
                        src={"eye.svg"}
                        alt="eye"
                        width={20}
                        height={20}
                        className="cursor-pointer"
                        onClick={() => dispatch(showPassword())}
                      />
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 md:text-sm text-xs"
                    />
                  </div>
                  <div className="flex justify-between items-center md:text-sm text-xs text-second font-bold">
                    <button onClick={toForgetModal}>
                      نسيت كلمة المرور؟
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-sm md:text-base bg-second hover:bg-blue-600 text-white py-2 rounded-3xl font-bold"
                  >
                    تسجيل الدخول
                  </button>
                  <div className="text-center md:text-sm text-xs mt-4">
                    <span>ليس لديك حساب؟ </span>
                    <button
                      type="button"
                      onClick={() => dispatch(switchModal())}
                      className="text-second hover:underline font-bold"
                    >
                      إنشاء حساب جديد
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
