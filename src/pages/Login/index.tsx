import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import Typography from "src/components/UI/Typography";
import AuthThumbnail from "src/components/UI/AuthThumbnail";
import GoogleAuth from "src/components/Auth/GoogleAuth";
import { LoginSchema } from "src/schemas/auth";
import useLanguage from "src/hooks/useLanguage";
import { displayErrorMessage } from "src/utils/validation";
import { AppDispatch } from "src/redux/store";
import { login } from "src/redux/thunks/users";
import {
  Container,
  FormContainer,
  Content,
  RedirectLink,
  LoginForm,
  Label,
  PasswordRow,
  LoginInput,
  ControlsRow,
  Submit,
  LanguageSelect,
} from "./Login.styled";
import { useTranslation } from "react-i18next";
import AuthRedirect from "src/components/Auth/Redirect";
import { languages } from "src/localization/constants";

interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });
  const { language, updateLanguage } = useLanguage();
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const { error } = useSelector((state: any) => state.user);
  const togglePassword = () => setShowPassword(!showPassword);

  const onSubmit = (data: LoginFormData) => {
    dispatch(login(data));
  };

  return (
    <Container>
      <AuthThumbnail />
      <Content>
        <LanguageSelect
          value={language}
          onChange={(v) => updateLanguage(v as string)}
          options={languages}
        />
        <FormContainer>
          <Typography as="h2" size="xl" weight="700">
            {t("auth.login.title")}
          </Typography>
          <AuthRedirect
            to="/signUp"
            question={t("auth.login.question")}
            linkLabel={t("auth.login.redirect")}
          />
          <LoginForm>
            <Label htmlFor="email">
              <Typography size="s" weight="700">
                {t("auth.inputs.email.label")}
              </Typography>
              <Controller
                name="email"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <LoginInput
                    id="email"
                    type="email"
                    value={value}
                    onChange={onChange}
                    placeholder={t("auth.inputs.email.placeholder") as string}
                    errorMessage={displayErrorMessage(errors?.email) || error}
                  />
                )}
              />
            </Label>
            <Label htmlFor="password">
              <PasswordRow>
                <Typography size="s" weight="700">
                  {t("auth.inputs.password.label")}
                </Typography>
                <RedirectLink to="/restorePassword">
                  <Typography color="primary" size="s" weight="700">
                    {t("auth.login.forgotPassword")}
                  </Typography>
                </RedirectLink>
              </PasswordRow>
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
                    errorMessage={
                      displayErrorMessage(errors?.password) || error
                    }
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
              <Typography size="m" weight="700" color={"white"}>
                {t("auth.login.submit")}
              </Typography>
            </Submit>
            <GoogleAuth mode="login" />
          </ControlsRow>
        </FormContainer>
      </Content>
    </Container>
  );
};

export default Login;
