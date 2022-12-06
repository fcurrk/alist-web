import {
  HStack,
  VStack,
  Text,
} from "@hope-ui/solid"
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
             {getSetting("contact_us") && (
	          <Text>{t("settings.contact_us")}: {getSetting("contact_us")}</Text>
	     )}
         </HStack>
	 <HStack spacing="$2">
              <Text
                color="$info9"
                as={LinkWithBase}
                href="/"
              >
	        {t("©2022 ")} {getSetting("site_title")}
              </Text>
            </HStack>
       </VStack>
  )
}

export default About