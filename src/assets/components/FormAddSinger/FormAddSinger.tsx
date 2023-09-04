import React, { useState } from "react";
import style from "./FormAddSinger.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { Singer } from "../SingerApp/SingerApp";

export type formData = {
  image: string;
  name: string;
  genre: string;
};

type FormAddSingerProps = {
  onSubmit: (formData: formData) => void;
  initialValues?: Omit<Singer, "id">;
};

const InitialFromData = {
  name: "",
  image: "",
  genre: "",
};

const FormAddSinger = ({ initialValues, onSubmit }: FormAddSingerProps) => {
  const [formData, setFormData] = useState(initialValues ? initialValues : InitialFromData);

  const submitHandler = () => {
    onSubmit(formData);

    setFormData(InitialFromData);
  };

  return (
    <form
      className={style.form}
      onSubmit={e => {
        e.preventDefault();
        onSubmit(formData);
        submitHandler();
      }}>
      <h3 className={style["form__heading"]}>Add singer</h3>
      <Input
        label="name:"
        required={true}
        placeholder="Edit name..."
        value={formData.name}
        onChange={e => {
          setFormData({ ...formData, name: e.currentTarget.value });
        }}
      />
      <Input
        label="image:"
        required={true}
        placeholder="https://www.some-image.com..."
        value={formData.image}
        onChange={e => {
          setFormData({ ...formData, image: e.currentTarget.value });
        }}
      />
      <Input
        label="genre:"
        placeholder="Edit genre..."
        value={formData.genre}
        required={true}
        onChange={e => {
          setFormData({ ...formData, genre: e.currentTarget.value });
        }}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default FormAddSinger;
