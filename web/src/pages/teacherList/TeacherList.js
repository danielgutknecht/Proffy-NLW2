import React from "react";
import "./styles.css";
import PageHeader from "../../components/pageHeader/PageHeader";
import TeacherItem from "../../components/teacherItem/TeacherItem";
import Input from "../../components/input/Input";
import Select from "../../components/select/Select";

export default function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esses são os proffys." />
      <form id="search-teachers">
        <Select
          name="subject"
          label="Matéria"
          options={[
            { value: "Artes", label: "Artes" },
            { value: "Biologia", label: "Biologia" },
            { value: "Geografia", label: "Geografia" },
            { value: "Matematica", label: "Matematica" },
            { value: "Ingles", label: "Ingles" },
            { value: "Historia", label: "Historia" },
            { value: "Fisica", label: "Fisica" },
            { value: "Portugues", label: "Portugues" },
            { value: "Quimica", label: "Quimica" },
          ]}
        />
        <Select
          name="week_day"
          label="Dia da Semana"
          options={[
            { value: "0", label: "Domingo" },
            { value: "1", label: "Segunda-feira" },
            { value: "2", label: "Terça-feira" },
            { value: "3", label: "Quarta-feira" },
            { value: "4", label: "Quinta-feira" },
            { value: "5", label: "Sexta-feira" },
            { value: "6", label: "Sábado" },
          ]}
        />
        <Input type="time" name="time" label="Hora" />
      </form>
      <main>
        <TeacherItem />
      </main>
    </div>
  );
}
