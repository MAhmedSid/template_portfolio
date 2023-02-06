import React from "react";
import { useFormik} from "formik";
import ReactLoading from "react-loading";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const { touched, errors, getFieldProps, handleSubmit } = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    onSubmit: (values, action) => {
      submit(values);
      onOpen(response.type, response.message);
      {
        response.type === "success" && action.resetForm();
      }
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("Provide your Name"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Provide your Email"),
      type: Yup.string().required("Select type of enquiry"),
      comment: Yup.string()
        .required("Provide your valuable comment")
        .min(25, "Minimum 25 characters required in comment"),
    }),
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#121212"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading
          fontSize="6xl"
          textColor={"aliceblue"}
          as="h2"
          id="contactme-section"
        >
          Let's Connect
        </Heading>
        <Box boxShadow="dark-lg" p={6} rounded="md" w="100%">
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={touched.firstName && errors.firstName ? true : false}
                isRequired
              >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...getFieldProps("firstName")}
                  autoComplete="off"
                  _autofill="off"
                />
                <FormErrorMessage>
                  {touched.firstName && errors.firstName
                    ? errors.firstName
                    : null}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={touched.email && errors.email ? true : false}
                isRequired
              >
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="off"
                  _autofill="off"
                  {...getFieldProps("email")}
                />
                <FormErrorMessage>
                  {touched.email && errors.email ? errors.email : null}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={touched.type && errors.type ? true : false}
                isRequired
              >
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" {...getFieldProps("type")}>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
                <FormErrorMessage>
                  {touched.type && errors.type ? errors.type : null}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={touched.comment && errors.comment ? true : false}
                isRequired
              >
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...getFieldProps("comment")}
                />
                <FormErrorMessage>
                  {touched.comment && errors.comment ? errors.comment : null}
                </FormErrorMessage>
              </FormControl>

              <Button
                _hover={{ bgColor: "rgb(255,255,255,0.10)" }}
                fontSize="2xl"
                textColor={"#ECB365"}
                type="submit"
                colorScheme="purple"
                width="52"
                height="16"
                variant="outline"
              >
                {isLoading ? (
                  <ReactLoading
                    type={"spinningBubbles"}
                    color="#ffffff"
                    height={30}
                    width={30}
                  />
                ) : (
                  "Submit"
                )}
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
