import React, { Component } from "react";
import { FlatList, Button } from "react-native";

import RegisterModuleLayout from "../components/register-module-layout";
import RegisterModuleItem from "../components/register-module-item";
import MyBotton from "../../utils/components/my-botton"
import RegisterModuleHederEnd from "../components/register-module-headerEnd";

class RegisterModule extends Component {
  state = {

    step: 0,
    availableSubjects: [
      {
        id: "1",
        name: "Gestion de Calidad de Software",
        level: "6to",
        credits: 4,
        avaliables: [
          {
            parallel: "A",
            schedule: ["Martes 9:00-11:00", "Jueves: 9:00-11:00"],
            teacher: "Ing.Ronaldo Nazrio",
            selected: false
          },
          {
            parallel: "B",
            schedule: ["Miercoles 9:00-11:00", "Viernes: 9:00-11:00"],
            teacher: "Ing.Ronaldo Nazrio",
            selected: false
          },
          {
            parallel: "C",
            schedule: ["Lunes 9:00-11:00", "Jueves: 11:00-12:00"],
            teacher: "Mg.Leonel Messi",
            selected: false
          }
        ]
      },
      {
        id: "2",
        name: "Bases de Datos Distribuidas",
        level: "6to",
        credits: 4,
        avaliables: [
          {
            parallel: "A",
            schedule: ["Martes 16:00-18:00", "Jueves: 16:00-18:00"],
            teacher: "Ing.Eden Hazzard",
            selected: false
          },
          {
            parallel: "B",
            schedule: ["Lunes 16:00-18:00", "Miercoles: 16:00-18:00"],
            teacher: "Ing.Eden Hazzard",
            selected: false
          }
        ]
      },
      {
        id: "3",
        name: "Aplicación de Herramientas Case",
        level: "7to",
        credits: 4,
        avaliables: [
          {
            parallel: "A",
            schedule: ["Martes 16:00-18:00", "Jueves: 16:00-18:00"],
            teacher: "Ing.Eden Hazzard",
            selected: false
          },
          {
            parallel: "B",
            schedule: ["Lunes 16:00-18:00", "Miercoles: 16:00-18:00"],
            teacher: "Ing.Eden Hazzard",
            selected: false
          }
        ]
      },
      {
        id: "4",
        name: "Optativa I",
        level: "7to",
        credits: 10,
        avaliables: [
          {
            parallel: "A",
            schedule: ["Martes 9:00-11:00", "Jueves: 9:00-11:00"],
            teacher: "Ing.Ronaldo Nazrio",
            selected: false
          },
          {
            parallel: "B",
            schedule: ["Miercoles 9:00-11:00", "Viernes: 9:00-11:00"],
            teacher: "Ing.Ronaldo Nazrio",
            selected: false
          },
          {
            parallel: "C",
            schedule: ["Lunes 9:00-11:00", "Jueves: 11:00-12:00"],
            teacher: "Mg.Leonel Messi",
            selected: false
          }
        ]
      }
    ],
    stepEnd: false,

  };

  keyExtractor = (item, idx) => idx.toString();

  renderItem = ({ item }) => (
    <RegisterModuleItem
      parallel={item.parallel || `${item[0].materia}\n"${item[0].parallel}"` || '-'}
      schedule={item.schedule || item[0].schedule || '-'}
      teacher={item.teacher || item[0].teacher || '-'}
      selected={item.selected}
      onPressItem={() => this.onPressItem(item.parallel)}
      isStepEnd={this.state.stepEnd}
    />
  );

  onPressRight = () => {
    if (this.state.step < this.state.availableSubjects.length - 1) {
      this.setState(prev => ({
        step: prev.step + 1
      }));
    } else if (this.state.step === this.state.availableSubjects.length - 1) {
      this.setState(prev => ({
        stepEnd: true
      }));
      console.log(this.filterSelected(this.state.availableSubjects))
    }
    setTimeout(this.scrollToTop, 200)
  };

  onPressLeft = () => {
    if (this.state.step !== 0) {
      if (this.state.stepEnd) {
        this.setState(prev => ({
          stepEnd: false
        }));
      } else {
        this.setState(prev => ({
          step: prev.step - 1
        }));
      }
    }
    setTimeout(this.scrollToTop, 200)

  };

  onPressEnd = () => {
    //this.props.navigation.navigate('Profile')
    setTimeout(this.scrollToTop, 200)

  }

  scrollToTop = () => {
    this.refs._scrollView.scrollToOffset({x: 0, y: 0, animated: true});
  }

  onPressItem = parallel => {
    const item = Object.assign([], this.state.availableSubjects);

    item[this.state.step].avaliables.map(item => (item.selected = false));
    item[this.state.step].avaliables.filter(
      item => item.parallel === parallel
    )[0].selected = !item[this.state.step].avaliables.filter(
      item => item.parallel === parallel
    )[0].selected;

    this.setState(() => ({
      availableSubjects: item
    }));

    this.onPressRight();
  };


  filterSelected = (subjects) => {
    const selected = subjects.map(item => item.avaliables.filter(it => it.selected).map(ite => {
      ite.materia = item.name
      return ite
    }))
    console.log(selected)
    return selected
  }

  render() {
    return (
      <RegisterModuleLayout
        headerTitle={
          this.state.stepEnd
            ? "General"
            : `${this.state.step + 1} de ${
            this.state.availableSubjects.length
            } Materias`
        }
        subjectName={this.state.availableSubjects[this.state.step].name}
        subjectLevel={this.state.availableSubjects[this.state.step].level}
        subjectCredits={this.state.availableSubjects[this.state.step].credits}
        avaliableParallel={
          this.state.availableSubjects[this.state.step].avaliables.length
        }
        onPressRight={this.onPressRight}
        onPressLeft={this.onPressLeft}
        stepEnd={this.state.stepEnd}
      >
        <FlatList
          ref='_scrollView'
          data={!this.state.stepEnd ? this.state.availableSubjects[this.state.step].avaliables : this.filterSelected(this.state.availableSubjects)}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          ListHeaderComponent={this.state.stepEnd && <RegisterModuleHederEnd />}
          ListFooterComponent={this.state.stepEnd && <MyBotton onPress={this.onPressEnd} title={'Finalizar Matrícula'} />}
        />
      </RegisterModuleLayout>
    );
  }
}

export default RegisterModule;
