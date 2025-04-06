import ActionButton from "@/components/buttons/action-button";
import NavigationButton from "@/components/buttons/navigation-button";
import Tag from "@/components/buttons/tag/tag";
import Frame from "@/components/layout/frame";
import {
  Avatar,
  Box,
  Field,
  Fieldset,
  Flex,
  Float,
  Textarea,
} from "@chakra-ui/react";
import { Camera, CaretLeft, Plus } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import DeleteAccountCard from "../components/cards/DeleteAccountCard";
import CustomInput from "../components/inputs/CustomInput";
import { useNavigate } from "react-router-dom";
import { userService } from "@/service/userService";
import api from "@/api/axiosConfig";
import { jwtDecode } from "jwt-decode";
import { eventService } from "@/service/eventService";
import AddNewTagCard from "@/components/cards/AddNewTagCard";

type UserData = {
  username?: string;
  email?: string;
  password?: string;
  name: string;
  bio: string;
  interests: string[];
};

function EditUserProfile() {
  const [cardDisplay, setCardDisplay] = useState("none");
  const [userData, setUserData] = useState<UserData>({
    name: "",
    bio: "",
    interests: [],
  });
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [possibleTags, setPossibleTags] = useState<string[]>([]);
  const [addTagCardDisplay, setAddTagCardDisplay] = useState("none");
  const navigate = useNavigate();

  const showHideCard = () => {
    setCardDisplay((cardDisplay) =>
      cardDisplay === "none" ? "block" : "none",
    );
  };

  const handleChange = (e: any) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (token) {
        checkUpdatedData();
        await userService.updateUser(userData);
        navigate("/profile");
      }
    } catch (error) {
      console.error("Erro ao atualizar usuário", error);
    }
  };

  const checkUpdatedData = () => {
    if (username.trim().length > 0) {
      userData.username = username;
    }
    if (email.trim().length > 0) {
      userData.email = email;
    }
    if (password.trim().length > 0) {
      userData.password = password;
    }
  };

  useEffect(() => {
    const fetchUserData = async (userId: any) => {
      try {
        const response = await api.get(`/user/${userId}`);
        setUserData({
          name: response.data.fullName,
          bio: response.data.bio,
          interests: response.data.interests,
        });
      } catch (error) {
        console.error("Erro ao buscar usuário", error);
      }
    };

    const fetchPossibleTags = async () => {
      try {
        const response = await eventService.getPossibleTags();
        setPossibleTags(response || []);
      } catch (error) {
        console.error("Erro ao buscar possibleTags", error);
      }
    };

    // Exemplo de uso (chamando a função com o ID do usuário)
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      fetchUserData(decoded.sub); // Se "sub" for o ID do usuário
    }

    fetchPossibleTags();
  }, []);

  const addInterest = (newInterest: string) => {
    handleTagCardDisplay();
    setUserData((prev) => ({
      ...prev,
      interests: [...prev.interests, newInterest],
    }));
  };

  const removeInterest = (interestToRemove: string) => {
    setUserData((prev) => ({
      ...prev,
      interests: prev.interests.filter(
        (interest) => interest !== interestToRemove,
      ),
    }));
    setPossibleTags((prev) => [...prev, interestToRemove]);
  };

  useEffect(() => {
    if (possibleTags.length > 0 && userData.interests.length > 0) {
      const tags = possibleTags.filter(
        (tag) => !userData.interests.includes(tag),
      );
      setPossibleTags(tags);
    }
  }, [userData.interests]);

  const handleTagCardDisplay = () => {
    setAddTagCardDisplay((e) => (e.includes("fixed") ? "none" : "fixed"));
  };

  return (
    <Frame>
      <DeleteAccountCard display={cardDisplay} onClick={showHideCard} />
      <AddNewTagCard
        possibleTags={possibleTags}
        display={addTagCardDisplay}
        closeClick={handleTagCardDisplay}
        action={addInterest}
      />
      <NavigationButton Icon={CaretLeft} label="Voltar" />
      <Flex direction="column" minW="100%" alignItems="center" gap={5}>
        <Box position="relative">
          <Avatar.Root minW="8rem" minH="8rem">
            <Avatar.Fallback name="Username" />
            <Avatar.Image src="#" />
          </Avatar.Root>
          <Float placement="bottom-end" offset={4}>
            <button style={{ cursor: "pointer" }}>
              <Box
                cursor="pointer"
                bg="customOrange"
                color="customWhite"
                p={1}
                rounded="md"
              >
                <Camera size={25} />
              </Box>
            </button>
          </Float>
        </Box>
        <Flex alignItems="center" gap={2} wrap="wrap" maxW="1200px">
          {userData.interests.map((e, index) => {
            return (
              <Tag
                key={index}
                label={e}
                style="solid"
                editClick={removeInterest}
              />
            );
          })}
          <button
            style={{
              cursor: "pointer",
              display: `${possibleTags.length == 0 ? "none" : "block"}`,
            }}
            onClick={handleTagCardDisplay}
            disabled={possibleTags.length == 0}
          >
            <Box border="1px solid" color="customOrange" p={1} rounded="full">
              <Plus size={15} />
            </Box>
          </button>
        </Flex>
        <Fieldset.Root size="lg">
          <Fieldset.Content gap={3}>
            <Flex direction="column" gap={3} md={{ flexDirection: "row" }}>
              <Field.Root>
                <CustomInput
                  name="username"
                  placeHolder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="off"
                />
              </Field.Root>
              <Field.Root>
                <CustomInput
                  name="name"
                  placeHolder="Nome Completo"
                  value={userData.name}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </Field.Root>
            </Flex>

            <Flex direction="column" gap={3} md={{ flexDirection: "row" }}>
              <Field.Root>
                <CustomInput
                  type="email"
                  name="email"
                  placeHolder="Email"
                  autoComplete="on"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Field.Root>
              <Field.Root>
                <CustomInput
                  name="password"
                  placeHolder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Field.Root>
            </Flex>

            <Field.Root>
              <Textarea
                name="bio"
                placeholder="Bio"
                fontSize="1rem"
                variant="subtle"
                outline="none"
                value={userData.bio || ""}
                onChange={handleChange}
              />
            </Field.Root>
          </Fieldset.Content>

          <Flex
            direction="column"
            gap={2}
            md={{ flexDirection: "row", justifyContent: "center" }}
          >
            <ActionButton
              type="button"
              label="Excluir Conta"
              buttonStyle="alert"
              action={showHideCard}
            />
            <ActionButton
              type="submit"
              label="Salvar Alterações"
              action={handleSubmit}
            />
          </Flex>
        </Fieldset.Root>
      </Flex>
    </Frame>
  );
}

export default EditUserProfile;
