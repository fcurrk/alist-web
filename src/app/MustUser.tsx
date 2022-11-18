import { createSignal, JSXElement, Match, Switch } from "solid-js"
import { Error, FullScreenLoading } from "~/components"
import { useFetch } from "~/hooks"
import { Me, setMe } from "~/store"
import { PResp } from "~/types"
import { r, handleResp } from "~/utils"

const MustUser = (props: { children: JSXElement }) => {
  const [loading, data] = useFetch((): PResp<Me> => r.get("/me"))
  const [err, setErr] = createSignal<string>()
  ;(async () => {
    // const resp: Resp<User> = await data();
    handleResp(await data(), setMe, setErr)
  })()
  return (
    <Switch fallback={props.children}>
      <Match when={loading()}>
        <FullScreenLoading />
      </Match>
      <Match when={err() !== undefined}>
        <Error msg={`failed get current user: ${err()}`} />
      </Match>
    </Switch>
  )
}

export { MustUser }
