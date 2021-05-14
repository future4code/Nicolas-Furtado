import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import useProtectedPage from "../../hooks/useProtectedPage";
import { goToFeed } from "../../routes/coordinator";
import { createPost } from "../../services/requests";
import { MainContainer, StyledForm, StyledTextField } from "./style";

const CreatePostPage = () => {
  useProtectedPage();
  const history = useHistory();
  const [form, handleInputChange] = useForm({title: '', text: ''})

  const onSubmitForm = (e) => {
    e.preventDefault();
    createPost(form, history);
  };

  return (
    <MainContainer>
      <StyledForm onSubmit={onSubmitForm}>
        <StyledTextField
          variant="outlined"
          color="secondary"
          required
          name="title"
          label="Titulo"
          value={form.title}
          onChange={handleInputChange}
          type="text"
        />
        <StyledTextField
          variant="outlined"
          color="secondary"
          required
          name="text"
          label="Texto"
          multiline
          value={form.text}
          onChange={handleInputChange}
          type="text"
        />
      <Button variant='outlined' color='secondary' type='submit'>Enviar</Button>
      </StyledForm>
    </MainContainer>
  );
};

export default CreatePostPage;
