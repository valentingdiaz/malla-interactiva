import '../src/index.scss'

export const decorators = [
    (Story) => (
        <div style={{display: "flex", justifyContent: "center", alignContent: "center", height: "100%"}}>
            <Story/>
        </div>
    )
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}