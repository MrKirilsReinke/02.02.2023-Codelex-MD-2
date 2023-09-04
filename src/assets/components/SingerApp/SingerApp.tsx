import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import style from "./SingerApp.module.scss";
import FormAddSinger, { formData } from "../FormAddSinger/FormAddSinger";
import CardSinger from "../CardSinger/CardSinger";
import axios from "axios";
import { toast } from "react-toastify";
import FormEditModalForm from "../FormEditModalForm/FormEditModalForm";

export type Singer = {
  id: number;
  image: string;
  name: string;
  genre: string;
};

const SingerApp = () => {
  const [editableItem, setEditableItem] = useState(0);
  const [loading, setLoading] = useState(true);
  const [singers, setSingers] = useState<Singer[]>([]);

  useEffect(() => {
    getAllSingers();
  }, []);

  const getAllSingers = () => {
    setLoading(true);
    axios.get<Singer[]>("http://localhost:3004/person").then(({ data }) => {
      console.log(data);
      setSingers(data);
      setLoading(false);
    });
  };

  const addPost = (formData: formData) => {
    setLoading(true);
    axios.post("http://localhost:3004/person", formData).then(({ data }) => {
      console.log(data);

      setSingers([...singers, data]);
      toast("Singer added", {
        type: "success",
        theme: "colored",
      });

      setLoading(false);
    });
  };

  const deletePost = (id: number) => {
    setLoading(true);
    axios.delete(`http://localhost:3004/person/${id}`);

    const updatedSingers = singers.filter(singer => singer.id !== id);

    setSingers(updatedSingers);

    toast("Singer deleted", {
      type: "error",
      theme: "colored",
    });

    setLoading(false);
  };

  const editSinger = (data: Omit<Singer, "id">) => {
    setLoading(true);
    axios.put(`http://localhost:3004/person/${editableItem}`, data);
    getAllSingers();

    toast("Singer updated", {
      type: "info",
      theme: "colored",
    });
  };

  return (
    <>
      <div className={style.container}>
        <div className={style["form-side"]}>
          <FormAddSinger onSubmit={addPost} />
        </div>
        <div className={style["content-side"]}>
          {loading && <h1>Loading...</h1>}

          {singers.map(({ id, image, name, genre }) => (
            <CardSinger
              key={id}
              image={image}
              name={name}
              genre={genre}
              onEdit={() => {
                setEditableItem(id);
              }}
              onDelete={() => {
                deletePost(id);
              }}
            />
          ))}
        </div>
      </div>
      {!!editableItem && (
        <FormEditModalForm
          values={
            singers.find(item => {
              item.id === editableItem;
            })!
          }
          onSubmit={editSinger}
          onClose={() => {
            setEditableItem(0);
          }}
        />
      )}
    </>
  );
};

export default SingerApp;
