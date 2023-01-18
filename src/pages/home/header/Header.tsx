import {
  HStack,
  useColorModeValue,
  Image,
  Heading,
  IconButton,
  Center,
  Icon,
  Kbd,
  Text,
} from "@hope-ui/solid"
import { Show } from "solid-js"
import { useT } from "~/hooks";
import { getSetting, layout, objStore, setLayout, State, getMainColor } from "~/store"
import { BsGridFill, BsSearch } from "solid-icons/bs"
import { FaSolidListUl } from "solid-icons/fa"
import { CenterLoading } from "~/components"
import { Container } from "../Container"
import { bus } from "~/utils"
import { Layout } from "./layout"

export const Header = () => {
  const t = useT()
  const logos = getSetting("logo").split("\n")
  const logo = useColorModeValue(logos[0], logos.pop())
  const logotexts = getSetting("logo_text").split("\n")
  const logotext = useColorModeValue(logotexts[0], logotexts.pop())
  return (
    <Center
      class="header"
      w="$full"
      // shadow="$md"
    >
      <Container>
        <HStack
          px="calc(2% + 0.5rem)"
          py="$2"
          w="$full"
          justifyContent="space-between"
        >
          <HStack class="header-left" h="44px">
          {getSetting("logo") ? (
             <Image src={logo()!} h="$full" w="auto" fallback={<CenterLoading />}/>
          ) : (
             <Heading size="lg" >{logotext}</Heading>
          )}
          </HStack>
          <HStack class="header-right" spacing="$2">
            <Show when={objStore.state === State.Folder}>
              <Show when={getSetting("search_index") !== "none"}>
                <HStack
                  bg="$neutral4"
                  w="$32"
                  p="$2"
                  rounded="$md"
                  justifyContent="space-between"
                  border="2px solid transparent"
                  cursor="pointer"
                  _hover={{
                    borderColor: "$info6",
                  }}
                  onClick={() => {
                    bus.emit("tool", "search")
                  }}
                >
                  <Icon as={BsSearch} />
                  <HStack>
                    <Kbd>Ctrl</Kbd>
                    <Kbd>K</Kbd>
                  </HStack>
                </HStack>
              </Show>
              <Layout />
            </Show>
          </HStack>
        </HStack>
      </Container>
    </Center>
  )
}
