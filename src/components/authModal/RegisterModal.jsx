"use client";
import { useDispatch, useSelector } from "react-redux";
import { closeRegisterModal, showPassword, switchModal, registerUser } from "@/ReduxSystem/Slices/authSlice";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";


const RegisterModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.auth.isRegisterModalOpen);
  const { isShowPassword } = useSelector((state) => state.auth);

  const initialValues = {
    name: "",
    phone_code:"",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("الاسم مطلوب").min(3,"يجب ان لا يقل عن 3 احرف "),
    phone: Yup.string()
      .matches(/^[0-9]{7}$/, "رقم الهاتف غير صحيح")
      .required("رقم الهاتف مطلوب"),
    password: Yup.string().min(8,"كلمة المرور يجب أن تكون على الأقل 8 أحرف'").required("كلمة المرور مطلوبة"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "كلمة المرور غير متطابقة")
      .required("تأكيد كلمة المرور مطلوب"),
  });


  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center !z-50">
          <div className="bg-white rounded-[32px] shadow-lg w-[80%] md:w-[50%] lg:w-[40%] relative p-8">
            <button onClick={() => dispatch(closeRegisterModal())} className="absolute top-4 right-4 text-gray-500 hover:text-red-500">
              <img src={"close-icon.svg"} alt="Close" width={15} height={15} />
            </button>

            <h2 className="md:text-[28px] text-base font-medium text-center mb-6">إنشاء حساب جديد</h2>

            <Formik
               initialValues={initialValues}
               validationSchema={validationSchema}
               onSubmit={(values, { resetForm }) => {
                 console.log(values); 
                 dispatch(registerUser(values)); 
                 dispatch(closeRegisterModal()); 
                 resetForm(); 
               }}
            >
              {({ setFieldValue }) => (
                <Form className="flex flex-col gap-4">
                  <div>
                    <label className="block mb-2 md:text-sm text-xs font-bold">الاسم</label>
                    <div className="flex flex-row-reverse items-center w-[100%] border border-[#F8F8FF] rounded-lg py-3 px-2 gap-2">
                      <Field type="text" name="name" className="w-[100%] focus:outline-none" />
                    </div>
                    <ErrorMessage name="name" component="div" className="text-red-500 md:text-sm text-xs" />
                  </div>
                  <div>
                    <label className="block mb-2 md:text-sm text-xs font-bold">رقم الهاتف</label>
                    <div className="flex md:flex-row-reverse flex-col items-start md:items-center gap-2">
                      <Field
                        type="tel"
                        name="phone"
                        className="w-[100%] border border-[#F8F8FF] rounded-lg py-3 px-10 focus:outline-none"
                      />
                                        <div className="flex items-center border border-[#F8F8FF] rounded-lg py-3 px-2 font-bold focus:outline-none w-1/3">
                    
                    <Field as="select" name="phone_code" className="focus:outline-none" dir="ltr">
                      <option>+966 </option>
                      <option>+20</option>
                      <option>+963</option>
                    </Field>
                    <img src="Saudi Arabia.png" alt="Saudi Arabia " width={30} height={20} />
                    </div>
                    </div>
                    <ErrorMessage name="phone" component="div" className="text-red-500 md:text-sm text-xs" />
                  </div>
                  <div>
                    <label className="block md:text-sm text-xs mb-2 font-bold">كلمة المرور</label>
                    <div className="w-full flex items-center justify-between border border-[#F8F8FF] rounded-lg px-4 py-2">
                      <Field
                        type={isShowPassword ? "text" : "password"}
                        name="password"
                        className="w-full focus:outline-none"
                      />
                      <img src={"eye.svg"} width={20} height={20} alt="eye icon" className="cursor-pointer" onClick={() => dispatch(showPassword())} />
                    </div>
                    <ErrorMessage name="password" component="div" className="text-red-500 md:text-sm text-xs" />
                  </div>
                  <div>
                    <label className="block md:text-sm text-xs mb-2 font-bold">تأكيد كلمة المرور</label>
                    <div className="w-full flex items-center justify-between border border-[#F8F8FF] rounded-lg px-4 py-2">
                      <Field
                        type={isShowPassword ? "text" : "password"}
                        name="confirmPassword"
                        className="w-full focus:outline-none"
                      />
                      <img src={"eye.svg"} width={20} height={20} alt="eye icon" className="cursor-pointer" onClick={() => dispatch(showPassword())} />
                    </div>
                    <ErrorMessage name="confirmPassword" component="div" className="text-red-500 md:text-sm text-xs" />
                  </div>

                  <button type="submit" className="w-full text-sm md:text-base bg-second hover:bg-blue-600 text-white py-2 rounded-3xl font-bold">
                    انشاء حساب جديد
                  </button>

                  <div className="text-center md:text-sm text-xs mt-4">
                    <span>لديك حساب بالفعل؟ </span>
                    <button onClick={()=>dispatch(switchModal())} className="text-second hover:underline font-bold">
                      تسجيل دخول
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

export default RegisterModal;
