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

const InitialFromData = {
  name: "",
  image: "",
  genre: "",
};

type FormAddSingerProps = {
  onSubmit: (formData: formData) => void;
  initialValues?: Omit<Singer, "id">;
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
      <span className={style.addSingerText}>Add singer</span>
      <Input
        label="Name:"
        required={true}
        placeholder="Edit name..."
        value={formData.name}
        onChange={e => {
          setFormData({ ...formData, name: e.currentTarget.value });
        }}
      />
      <Input
        label="Image:"
        required={true}
        placeholder="https://www.some-image.com..."
        value={formData.image}
        onChange={e => {
          setFormData({ ...formData, image: e.currentTarget.value });
        }}
      />
      <Input
        label="Genre:"
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
