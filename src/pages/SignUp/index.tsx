import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "src/redux/store";
import { signUp } from "src/redux/thunks/users";
import Typography from "src/components/UI/Typography";
import AuthThumbnail from "src/components/UI/AuthThumbnail";
import GoogleAuth from "src/components/Auth/GoogleAuth";
import { SignUpSchema } from "src/schemas/auth";
import { displayErrorMessage } from "src/utils/validation";
import { languages } from "src/localization/constants";
import useLanguage from "src/hooks/useLanguage";
import {
  Container,
  FormContainer,
  Content,
  LoginForm,
  Label,
  LoginInput,
  ControlsRow,
  Submit,
  LanguageSelect,
} from "./SignUp.styled";
import { useTranslation } from "react-i18next";
import AuthRedirect from "src/components/Auth/Redirect";

interface SignUpFormData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const SignUp = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(SignUpSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
    mode: "onSubmit",
  });
  const { t } = useTranslation();
  const { language, updateLanguage } = useLanguage();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const { error } = useSelector((state: any) => state.user);

  const togglePassword = () => setShowPassword(!showPassword);

  const onSubmit = (data: SignUpFormData) => dispatch(signUp(data));

  return (
    <Container>
      <AuthThumbnail />
      <Content>
        <LanguageSelect
          value={language}
          options={languages}
          onChange={(v) => updateLanguage(v as string)}
        />
        <FormContainer>
          <Typography as="h2" size="xl" weight="700">
            {t("auth.signUp.title")}
          </Typography>
          <AuthRedirect
            to="/login"
            question={t("auth.signUp.question")}
            linkLabel={t("auth.signUp.redirect")}
          />
          <LoginForm>
            <Label htmlFor="firstName">
              <Typography size="s" weight="700">
                {t("auth.inputs.firstName.label")}
              </Typography>
              <Controller
                name="firstName"
                control={control}
                render={({ field: { onChange } }) => (
                  <LoginInput
                    id="firstName"
                    type="text"
                    onChange={onChange}
                    placeholder={
                      t("auth.inputs.firstName.placeholder") as string
                    }
                    errorMessage={displayErrorMessage(errors?.firstName)}
                  />
                )}
              />
            </Label>
            <Label htmlFor="lastName">
              <Typography size="s" weight="700">
                {t("auth.inputs.lastName.label")}
              </Typography>
              <Controller
                name="lastName"
                control={control}
                render={({ field: { onChange } }) => (
                  <LoginInput
                    id="lastName"
                    type="text"
                    onChange={onChange}
                    placeholder={
                      t("auth.inputs.lastName.placeholder") as string
                    }
                    errorMessage={displayErrorMessage(errors?.lastName)}
                  />
                )}
              />
            </Label>
            <Label htmlFor="email">
              <Typography size="s" weight="700">
                {t("auth.inputs.email.label")}
              </Typography>
              <Controller
                name="email"
                control={control}
                render={({ field: { onChange } }) => (
                  <LoginInput
                    id="email"
                    type="email"
                    onChange={onChange}
                    placeholder={t("auth.inputs.email.placeholder") as string}
                    errorMessage={displayErrorMessage(errors?.email) || error}
                  />
                )}
              />
            </Label>
            <Label htmlFor="password">
              <Typography size="s" weight="700">
                {t("auth.inputs.password.label")}
              </Typography>
              <Controller
                name="password"
                control={control}
                render={({ field: { onChange } }) => (
                  <LoginInput
                    id="password"
                    onChange={onChange}
                    type={showPassword ? "text" : "password"}
                    onSecurePress={togglePassword}
                    secure
                    errorMessage={displayErrorMessage(errors?.password)}
                    placeholder={
                      t("auth.inputs.password.placeholder") as string
                    }
                  />
                )}
              />
            </Label>
          </LoginForm>
          <ControlsRow>
            <Submit onClick={handleSubmit(onSubmit)}>
              <Typography size="m" weight="700" color="white">
                {t("auth.signUp.submit")}
              </Typography>
            </Submit>
            <GoogleAuth mode="signUp" />
          </ControlsRow>
        </FormContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
