import React from "react";
import style from "./FormEditModalForm.module.scss";
import FormAddSinger from "../FormAddSinger/FormAddSinger";
import { Singer } from "../SingerApp/SingerApp";

type FormEditModalForm = {
  onClose: () => void;
  values: Omit<Singer, "id">;
  onSubmit: (formData: Omit<Singer, "id">) => void;
};

const FormEditModalForm = ({ onClose, values, onSubmit }: FormEditModalForm) => {
  return (
    <div className={style.modal}>
      <div className={style.container}>
        <button className={style.close} onClick={onClose}>
          X
        </button>
        <FormAddSinger
          initialValues={values}
          onSubmit={data => {
            onSubmit(data);
            onClose();
          }}
        />
      </div>
    </div>
  );
};

export default FormEditModalForm;
