import {
  Box,
  Flex,
  LoadingOverlay,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import { useCallback, useState } from "react";
import { Coolbutton } from "./components/Coolbutton";
import { API_ENDPOINT } from "./const";

export const ContactMe = ({
  setShowSuccess,
  setShowForm,
}: {
  setShowSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const SendMessage = useCallback(
    async (values: { name: string; email: string; message: string }) => {
      setIsLoading(true);
      try {
        const resp = await axios({
          method: "post",
          url: `${API_ENDPOINT}/send`,
          data: {
            name: values.name,
            message: values.message,
            email: values.email,
          },
        });
        if (resp.status !== 200) {
          setError(true);
        } else {
          setShowSuccess(true);
          setShowForm(false);
        }
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    },
    [setShowForm, setShowSuccess, setIsLoading]
  );

  return (
    <ContactMeInner
      SendMessage={SendMessage}
      isLoading={isLoading}
      error={error}
    />
  );
};

const ContactMeInner = ({
  SendMessage,
  isLoading,
  error,
}: {
  SendMessage: (values: {
    name: string;
    email: string;
    message: string;
  }) => void;
  isLoading: boolean;
  error: boolean;
}) => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  return (
    <Box
      sx={{
        width: "100%",
        padding: "1em 1em",
      }}
    >
      <LoadingOverlay visible={isLoading} overlayBlur={2} />
      <form
        onSubmit={form.onSubmit((values) => {
          SendMessage(values);
        })}
      >
        <TextInput
          label="Name"
          placeholder="Name"
          {...form.getInputProps("name")}
          required
          withAsterisk
          sx={{ fontFamily: "Liquido Regular" }}
          styles={() => ({
            label: {
              fontSize: "2.5em",
            },
            input: {
              fontFamily: "Roboto Regular",
            },
          })}
          disabled={isLoading}
        />
        <TextInput
          mt="md"
          label="Email"
          placeholder="Email"
          {...form.getInputProps("email")}
          required
          withAsterisk
          sx={{ fontFamily: "Liquido Regular" }}
          styles={() => ({
            label: {
              fontSize: "2.5em",
            },
            input: {
              fontFamily: "Roboto Regular",
            },
          })}
          disabled={isLoading}
        />
        <Textarea
          mt="md"
          label="Message"
          placeholder="Your Personal Message"
          {...form.getInputProps("message")}
          required
          withAsterisk
          sx={{ fontFamily: "Liquido Regular" }}
          styles={() => ({
            label: {
              fontSize: "2.5em",
            },
            input: {
              fontFamily: "Roboto Regular",
            },
          })}
          disabled={isLoading}
        />
        <Flex
          justify="space-between"
          sx={{
            marginTop: "2em",
            "@media (max-width:720px)": {
              flexDirection: "column",
            },
          }}
          align="center"
        >
          <Coolbutton
            backgroundColor="#F64740"
            hoverColor="#001122"
            type="submit"
            loading={isLoading}
            loaderPosition="right"
          >
            Submit
          </Coolbutton>
          {error && (
            <Text
              sx={{
                color: "red",
                fontFamily: "Liquido Regular",
                fontSize: "1.5em",
                textAlign: "center",
              }}
            >
              Error sending message please try again or email me{" "}
              <a href="mailto:fresh.moon7884@fastmail.com">here</a>
            </Text>
          )}
        </Flex>
      </form>
      <Text
        sx={{
          color: "#001122",
          fontFamily: "Liquido Regular",
          fontSize: "1.5em",
        }}
      >
        Form powered by{" "}
        <a
          href="https://github.com/ivanngyb/contact-tele-me"
          target="_blank"
          rel="noreferrer"
        >
          Me
        </a>
      </Text>
    </Box>
  );
};
