import React from "react";
import { Modal } from "antd";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Typography from "src/components/UI/Typography";
import Input from "src/components/Form/Input";
import styled from "styled-components";
import { ForgotPasswordSchema } from "src/schemas/auth";
import { displayErrorMessage } from "src/utils/validation";
import { useTranslation } from "react-i18next";
import { hex2rgba } from "src/utils/ui";
import Button from "src/components/UI/Button";

export const Container = styled.main`
  width: calc(100% - 100px);
  height: calc(100% - 100px);
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 20px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 26px;
  border-bottom: 1px solid
    ${(props) => hex2rgba(props.theme.colors.lightGrey, 0.25)};
`;

export const Content = styled.form`
  margin: auto;
  max-width: 500px;
  padding-top: 50px;
`;

export const FormInfo = styled(Typography)`
  margin-top: 8px;
  margin-bottom: 32px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 32px;
  width: 100%;
`;

interface ForgotPasswordData {
  email: string;
}

interface IForgotPasswordProps {
  visible: boolean;
  closeModal(): void;
}

const ForgotPassword: React.FC<IForgotPasswordProps> = ({
  visible,
  closeModal,
}) => {
  const { t } = useTranslation();
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
    <Modal
      footer={null}
      title={t("auth.forgotPassword.title")}
      open={visible}
      onCancel={closeModal}
    >
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
    </Modal>
  );
};

export default ForgotPassword;
