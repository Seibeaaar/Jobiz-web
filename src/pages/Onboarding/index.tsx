import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Typography from "src/components/UI/Typography";
import Button from "src/components/UI/Button";
import EmployerImage from "src/assets/images/Employer.webp";
import EmployeeImage from "src/assets/images/Employee.webp";
import {
  Container,
  Info,
  OptionImage,
  OptionsRow,
  PositionDescription,
  PositionInfo,
  Option,
  SubmitButton,
} from "./Onboarding.styled";

const Onboarding = () => {
  const [profileType, setProfileType] = useState<"employee" | "employer">(
    "employee"
  );
  const { t } = useTranslation();

  const checkSelected = (option: "employee" | "employer") =>
    profileType === option;

  return (
    <Container>
      <Typography size="xxl" weight="700">
        {t("onboarding.title")}
      </Typography>
      <Info size="m" color="lightGrey">
        {t("onboarding.profileType.header")}
      </Info>
      <OptionsRow>
        <Option
          onClick={() => setProfileType("employer")}
          selected={checkSelected("employer")}
          bordered={false}
          hoverable
        >
          <OptionImage width={200} height={200} src={EmployerImage} />
          <PositionInfo>
            <Typography size="m" weight="700">
              {t("onboarding.profileType.employer.type")}
            </Typography>
            <PositionDescription size="s" color="greyPrimary">
              {t("onboarding.profileType.employer.info")}
            </PositionDescription>
          </PositionInfo>
        </Option>
        <Option
          onClick={() => setProfileType("employee")}
          selected={checkSelected("employee")}
          bordered={false}
          hoverable
        >
          <OptionImage width={200} height={200} src={EmployeeImage} />
          <PositionInfo>
            <Typography size="m" weight="700">
              {t("onboarding.profileType.employee.type")}
            </Typography>
            <PositionDescription size="s" color="greyPrimary">
              {t("onboarding.profileType.employee.info")}
            </PositionDescription>
          </PositionInfo>
        </Option>
      </OptionsRow>
      <SubmitButton>
        <Typography size="s" color="white">
          {t("general.confirm")}
        </Typography>
      </SubmitButton>
    </Container>
  );
};

export default Onboarding;
