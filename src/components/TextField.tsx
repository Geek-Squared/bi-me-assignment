import { Formik } from "formik";
import {
  Input,
  Form,
  Label,
  RadioLabel,
  Radio,
  RadioWrapper,
  RadioLabelWrapper,
  Title,
  ErrorMsg,
} from "../utils/theme";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useState } from "react";
import data from "../utils/questions.json";
import * as Yup from "yup";

const TextField = () => {
  const [showField, setShowField] = useState(false);

  const validationSchema = Yup.object().shape({
    companyName: Yup.string().required("Company Name is Required"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          publicLiability: false,
          companyName: "",
        }}
        validate={(values) => {
          console.log("values", values);
        }}
        onSubmit={(values) => {
          console.log("values", values);
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Title>{data.questions[0]?.text}</Title>
            <RadioLabelWrapper>
              <RadioWrapper>
                <Radio
                  type="radio"
                  name="publicLiability"
                  value="true"
                  onClick={() => setShowField(false)}
                />
                <RadioLabel htmlFor="radio">NO</RadioLabel>
              </RadioWrapper>
              <RadioWrapper>
                <Radio
                  type="radio"
                  name="publicLiability"
                  value="false"
                  onClick={() => setShowField(true)}
                />
                <RadioLabel htmlFor="radio">YES</RadioLabel>
              </RadioWrapper>
            </RadioLabelWrapper>
            {showField && (
              <>
                <Title>{data.questions[1]?.text}</Title>
                <Label
                  htmlFor="companyName"
                  style={{
                    color:
                      (errors.companyName && values.companyName && "red") ||
                      values.companyName
                        ? "#467EE7"
                        : "#858587",
                  }}
                >
                  Company Name
                </Label>
                <Input
                  type="text"
                  name="companyName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.companyName}
                  placeholder={data.questions[1]?.placeholder}
                  style={{
                    borderColor: values.companyName ? "#467EE7" : "#858587",
                  }}
                />

                <AiOutlineInfoCircle
                  size={"20px"}
                  style={{
                    position: "relative",
                    top: "-28px",
                    left: "160px",
                    color: "#B1B1B5",
                  }}
                />
                {errors.companyName && touched.companyName && (
                  <ErrorMsg>{errors.companyName}</ErrorMsg>
                )}
              </>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TextField;
