import React from "react";
import Modal from "src/components/UI/Modal";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Typography from "src/components/UI/Typography";
import CloseButton from "src/components/UI/CloseButton";
import {
  Container,
  Header,
  Content,
  FormInfo,
  SubmitButton,
} from "./ForgotPassword.styled";
import { useNavigate } from "react-router-dom";
import { ForgotPasswordSchema } from "src/schemas/auth";
import { displayErrorMessage } from "src/utils/validation";
import Input from "src/components/Form/Input";
import { useTranslation } from "react-i18next";

interface ForgotPasswordData {
  email: string;
}

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const goBack = () => navigate("/login");
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(ForgotPasswordSchema),
    mode: "onSubmit",
  });

  const onSubmit = (data: ForgotPasswordData) => console.log(data);

  return (
    <Modal>
      <Container>
        <Header>
          <Typography size="l" weight="700">
            {t("auth.forgotPassword.title")}
          </Typography>
          <CloseButton onClick={goBack} />
        </Header>
        <Content>
          <div>
            <Typography size="xl" weight="700">
              {t("auth.forgotPassword.header")}
            </Typography>
            <FormInfo size="m" weight="500" color="lightGrey">
              {t("auth.forgotPassword.info")}
            </FormInfo>
          </div>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange } }) => (
              <Input
                errorMessage={displayErrorMessage(errors?.email)}
                id="email"
                onBlur={onChange}
                placeholder={t("auth.inputs.email.placeholder") as string}
                onChange={onChange}
              />
            )}
          />
          <SubmitButton onClick={handleSubmit(onSubmit)}>
            <Typography weight="700" color="white" size="m">
              {t("auth.forgotPassword.submit")}
            </Typography>
          </SubmitButton>
        </Content>
      </Container>
    </Modal>
  );
};

export default ForgotPassword;
