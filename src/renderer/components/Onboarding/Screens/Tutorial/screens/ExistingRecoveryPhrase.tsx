import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { Title, SubTitle, AsideFooter, CheckStep, Column, IllustrationContainer } from "../shared";
import getStarted from "../assets/v3/getStarted.png";

type Props = {
  sendEvent: (event: string, params: any) => void;
  context: {
    userUnderstandConsequences: boolean;
  };
};

export function ExistingRecoveryPhrase({ sendEvent, context }: Props) {
  const { t } = useTranslation();
  const { userUnderstandConsequences } = context;

  return (
    <Column>
      <Title>{t("onboarding.screens.tutorial.screens.existingRecoveryPhrase.title")}</Title>
      <SubTitle>
        {t("onboarding.screens.tutorial.screens.existingRecoveryPhrase.paragraph1")}
      </SubTitle>
      <SubTitle>
        {t("onboarding.screens.tutorial.screens.existingRecoveryPhrase.paragraph2")}
      </SubTitle>
      <CheckStep
        checked={userUnderstandConsequences}
        onClick={() => sendEvent("RECOVERY_TERMS_CHANGED", { value: !userUnderstandConsequences })}
        label={t("onboarding.screens.tutorial.screens.existingRecoveryPhrase.disclaimer")}
      />
    </Column>
  );
}

ExistingRecoveryPhrase.Illustration = (
  <IllustrationContainer width="240px" height="245px" src={getStarted} />
);

const Footer = (props: any) => {
  const { t } = useTranslation();
  return (
    <AsideFooter
      {...props}
      text={t("onboarding.screens.tutorial.screens.existingRecoveryPhrase.buttons.help")}
    />
  );
};

ExistingRecoveryPhrase.Footer = Footer;

ExistingRecoveryPhrase.canContinue = context => context.userUnderstandConsequences;

ExistingRecoveryPhrase.continueLabel = (
  <Trans i18nKey="onboarding.screens.tutorial.screens.existingRecoveryPhrase.buttons.next" />
);