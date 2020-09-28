import React, { useState } from "react";
import PageHeader from "../../components/pageHeader/PageHeader";
import Input from "../../components/input/Input";
import warningIcon from "../../assets/images/icons/warning.svg";
import "./styles.css";
import TextArea from "../../components/textarea/TextArea";
import Select from "../../components/select/Select";

export default function TeacherForm() {
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

  const [nome, setNome] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");

  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");

  const addNewScheduleItem = () => {
    setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
  };

  const handleInputName = (event) => {
    setNome(event.target.value);
    console.log(setNome);
  };

  const handleInputAvatar = (event) => {
    setAvatar(event.target.value);
  };

  const handleInputWhatsapp = (event) => {
    setWhatsapp(event.target.value);
  };

  const handleInputBio = (event) => {
    setBio(event.target.value);
  };

  const handleInputSubject = (event) => {
    setSubject(event.target.value);
  };

  const handleInputCost = (event) => {
    setCost(event.target.value);
  };

  const handleCreateClass = (event) => {
    event.preventDefault();

    console.log({
      nome,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      scheduleItems
    });
  };

  //map para encontrar o valor
  const handleScheduleItemValue = (position, field, value) => {
    const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }
      return scheduleItem;
    });
    setScheduleItems(updateScheduleItems);
  };

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />
      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus Dados</legend>
            <Input
              name="name"
              label="Nome completo"
              value={nome}
              onChange={handleInputName}
            />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={handleInputAvatar}
            />
            <Input
              name="whatsapp"
              label="WhatsApp"
              value={whatsapp}
              onChange={handleInputWhatsapp}
            />
            <TextArea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={handleInputBio}
            />
          </fieldset>
          <fieldset>
            <legend>Sobre a aula</legend>
            <Select
              name="subject"
              label="Matéria"
              value={subject}
              onChange={handleInputSubject}
              options={[
                { value: "0", label: "Artes" },
                { value: "1", label: "Biologia" },
                { value: "2", label: "Geografia" },
                { value: "3", label: "Matematica" },
                { value: "4", label: "Ingles" },
                { value: "5", label: "Historia" },
                { value: "6", label: "Fisica" },
                { value: "7", label: "Portugues" },
                { value: "8", label: "Quimica" },
              ]}
            />
            <Input
              name="cost"
              label="Custo da sua hora por aula"
              value={cost}
              onChange={handleInputCost}
            />
          </fieldset>
          <fieldset>
            <div>
              <legend>
                Horários disponíveis
                <button type="button" onClick={addNewScheduleItem}>
                  + Novo horário
                </button>
              </legend>
            </div>
            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Dia da Semana"
                    value={scheduleItem.week_day}
                    onChange={(event) =>
                      handleScheduleItemValue(index,"week_day",event.target.value)
                    }
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
                  <Input 
                  name="from" 
                  label="Das" 
                  type="time"
                  value={scheduleItem.from}
                  onChange={(event) =>
                    handleScheduleItemValue(index,"from",event.target.value)
                  } />
                  <Input 
                  name="to" 
                  label="até" 
                  type="time"
                  value={scheduleItem.to}
                  onChange={(event) =>
                    handleScheduleItemValue(index,"to",event.target.value)
                  } />
                </div>
              );
            })}
          </fieldset>
          <footer>
            <div>
              <img src={warningIcon} alt="Aviso Importante" />
              <p>
                Importante!
                <br /> Preencha todos os dados
              </p>
            </div>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
}
