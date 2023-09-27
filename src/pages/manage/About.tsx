import { HStack, VStack, Text } from "@hope-ui/solid"
import { useManageTitle } from "~/hooks"
import { useT } from "~/hooks"
import { LinkWithBase } from "~/components"
import { getSetting, user } from "~/store"

const About = () => {
  useManageTitle("manage.sidemenu.about")
  const t = useT()
  return (
    <VStack w="$full" spacing="$4" alignItems="start">
      <HStack spacing="$2">
        {getSetting("contact_us") && <Text>{getSetting("contact_us")}</Text>}
      </HStack>
      <HStack spacing="$2">
        <Text color="$info9">
          {t("©2023 ")} {getSetting("site_title")} {t("v")}{getSetting("version")}
        </Text>
      </HStack>
    </VStack>
  )
}

export default About
