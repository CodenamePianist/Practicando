import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { TextInput, Button } from "@mantine/core";
import { useForm } from "@mantine/form";

export default function App() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      composer: "",
      piece: "",
      instrument: "",
    },
  });

  return (
    <>
      <MantineProvider>
        <p>Does anything appear here?</p>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput
            withAsterisk
            label="Composer"
            key={form.key("composer")}
            {...form.getInputProps("composer")}
          />

          <TextInput
          withAsterisk
          label="Piece"
          key={form.key('piece')}
          {...form.getInputProps('piece')}
        />

        <TextInput
          withAsterisk
          label="Instrument"
          key={form.key('instrument')}
          {...form.getInputProps('instrument')}
        />

        <Button type="submit">Submit</Button>
        </form>
      </MantineProvider>
    </>
  );
}
