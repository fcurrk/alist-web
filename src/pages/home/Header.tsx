import {
  HStack,
  useColorModeValue,
  Image,
  Heading,
  IconButton,
  Center,
  Text,
} from "@hope-ui/solid";
import { Show } from "solid-js";
import { useT } from "~/hooks";
import { getSetting, layout, objStore, setLayout, State, getMainColor } from "~/store";
import { BsGridFill } from "solid-icons/bs";
import { FaSolidListUl } from "solid-icons/fa";
import { CenterLoading } from "~/components";
import { Container } from "./Container";

export const Header = () => {
  const t = useT();
  const logos = getSetting("logo").split("\n");
  const logo = useColorModeValue(logos[0], logos.pop()) as string;
  const logotexts = getSetting("logo_text").split("\n");
  const logotext = useColorModeValue(logotexts[0], logotexts.pop()) as string;
  return (
    <Center
      class="header"
      w="$full"
      // shadow="$md"
    >
      <Container>
        <HStack px="calc(2% + 0.5rem)" py="$2" w="$full" justifyContent="space-between">
          <HStack class="header-left" h="44px">
          {getSetting("logo") ? (
             <Image src={logo()!} h="$full" w="auto" fallback={<CenterLoading />}/>
          ) : (
             <Heading size="lg" >{logotext}</Heading>
          )}
          </HStack>
          <HStack class="header-right" spacing="$2">
            <Show when={objStore.state === State.Folder}>
              <IconButton
                aria-label="switch layout"
                compact
                size="lg"
                color={getMainColor()}
                icon={
                  <Show when={layout() === "list"} fallback={<FaSolidListUl />}>
                    <BsGridFill />
                  </Show>
                }
                onClick={() => {
                  setLayout(layout() === "list" ? "grid" : "list");
                }}
              />
            </Show>
          </HStack>
        </HStack>
      </Container>
    </Center>
  );
};
