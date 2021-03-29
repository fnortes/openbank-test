// @flow
import * as React from "react";
import OpenbankLogo from "assets/img/key_openbank.png";
import ProductInformation from "pages/Home/views/ProductInformation";
import Form from "pages/Home/views/Form";
import Feedback from "pages/Home/views/Feedback";
import useScrollTop from "hooks/useScrollTop";
import Button from "components/buttons";
import { PRIORITIES } from "components/buttons/StyledButton";

export default function Home(): React.Node {
  useScrollTop();

  return (
    <section>
      <Button
        align="center"
        priority={PRIORITIES.PRIMARY}
        iconClass="fa-chevron-right"
        to="/wizard"
      >
        Entrar al Wizard
      </Button>
      <h1>Notas del test realizado</h1>
      <p>
        A continuación enumero algunos puntos que considero serían a tener en
        cuenta respecto al test realizado:
      </p>
      <ul>
        <li>
          A pesar de que la estructura del proyecto estaba preparada con
          componentes de clase, y puesto que la versión de React lo permite, he
          realizado todos los componentes como funciones, con el uso de
          <strong>Hooks</strong> y <strong>Context</strong> para un mejor
          rendimiento.
        </li>
        <li>
          <h4>En cuanto a dependecias añadidas al package.json</h4>
          <ul>
            <li>
              A pesar de no ser un requisito en la prueba, creo que el manejarse
              con las rutas en React es importante. Por tanto, he añadido{" "}
              <strong>wouter</strong>, que es mucho menos pesada que
              react-router-dom, y bajo mi punto de vista más limpia de utilizar.
            </li>
            <li>
              Para el tema de documentación, he añadido <strong>jsdoc</strong> y{" "}
              <strong>better-docs</strong> (como dependecia de desarrollo), con
              el fin de aprovechar los comentarios del propio código y montar
              una interfaz web independiente en la que poder consultar todos los
              componentes de la aplicación y su uso. Para lanzar bastaría con
              ejecutar <strong>npm run docs</strong> (añadida al README.md del
              proyecto). En la entrega, va incluida la carpeta docs generada,
              por si hubiera algún problema, a pesar de que con comando anterior
              se puede regenerar en cualquier momento.
            </li>
          </ul>
        </li>
        <li>
          He añadido una pequeña configuración al <strong>jsconfig.json</strong>{" "}
          para cambiar el baseUrl y tener unas rutas en los imports del proyecto
          más limpias.
        </li>
        <li>
          Aprovechando el añadido de un enrutador, he dejado como Home la página
          original del proyecto y en una página independiente el desarrollo del
          propio Wizard.
        </li>
        <li>
          He añadido el uso de carga de componentes <strong>Lazy</strong>, tanto
          a la hora de cargar las 2 páginas existentes, como para cargar cada
          uno de los 3 pasos del Wizard.
        </li>
        <li>
          Respecto a estilos, aunque podría haber incorparado algún framework
          tipo Bootstrap para partir de una base al hacer los layouts, he
          preferido hacerlos todos a mano y desde cero, entiendo que era mejor
          opción para el objetivo de la prueba (Salvo los estilos del Spinner,
          que son copiados).
        </li>
        <li>
          En el Wizard, si se mete una contraseña que da KO en el api, el link
          de la pantalla de error te lleva al inicio del Wizard cargando de
          nuevo todos los datos introducidos la primera vez (tanto el check para
          aceptar del paso 1, como todos los datos del paso 2). Soy consciente
          de que no sería lo ideal en una situación real, sobre todo por el tema
          tan delicado como son las contraseñas, pero decidí hacerlo así porque
          me parecío muy práctico y usable a la hora de estar haciendo pruebas.
        </li>
      </ul>
      <Button
        align="center"
        priority={PRIORITIES.PRIMARY}
        iconClass="fa-chevron-right"
        to="/wizard"
      >
        Entrar al Wizard
      </Button>
      <h1>
        Bienvenid@ al test de{" "}
        <img
          src={OpenbankLogo}
          className="App-header-logo"
          alt={"openbank-logo"}
        />
      </h1>
      <h3>Objetivo </h3>
      <p>
        Lo que pretendemos con la prueba es evaluar las capacidades técnicas
        respecto a un desarrollador web o front, especialmente en el area de
        React y aplicaciones SPA. Con esta prueba se pretende valorar muchos
        aspectos del stack tecnologico de un desarrollador del ambito web, como
        arquitectura, uso de patrones de diseño, maquetación, técnicas de
        programación, documentación, conocimentos de Javascript, HTML y CSS,
        entre otros.{" "}
      </p>
      <h3>¿En que consiste?</h3>
      <p>
        La prueba consiste en diseñar, maquetar y desarrollar desde cero un
        pequeño wizard que simule algo tan típico como la creación de una
        contraseña para un usuario. Lo que queremos que hagas es que plantees un
        wizard de unos 3 pasos en los que un usuario reciba información de que
        está a punto de crear una contraseña nueva, un formulario donde se le
        pidan una serie de datos para la creación de la contraseña y una página
        final de feedback de la operación.
      </p>
      <h3>Desarrollo</h3>
      <ul>
        <li>
          <h4>1º Pantalla de información de la contraseña</h4>
          <ProductInformation />
          <p>
            En esta pantalla el usuario que entra a la aplicación debe entender
            que está contratando. Deberias darle la bienvenida al producto
            "Cuenta Corriente OpenClose" y explicarle que vas a demandarle sus
            datos en los siguientes pasos. Es una pantalla con una explicación,
            nombre del producto y botones de wizard de avanzar.
          </p>
          <h5>
            Esta pantalla será el paso numero uno del wizard y tiene que tener
            un check (que tiene que pulsar) que habilite el boton de avanzar, en
            el que se le pregunta al usuario si tiene mayoría de edad y que
            acepta que tratemos sus datos según la politica de protección de
            datos.
          </h5>
        </li>
        <li>
          <h4>2º Pantalla de creación de la contraseña</h4>
          <Form />
          <p>
            En esta pantalla al usuario se le van a pedir los siguientes datos
            en un formulario.
          </p>
          <ul>
            <li>
              Contraseña(Min 8 - Max 24 caracteres)(Al menos 1 número y una
              mayúscula)
            </li>
            <li>Pista (Maximo 255 caracteres)</li>
          </ul>
          <h5>
            Aquí para poder avanzar de paso, es necesario que todos los campos
            del formulario esten correctamente rellenos. Se debe controlar
            errores de tipo o forma en cada uno de ellos, mostrando un error
            asociado a cada input. Se debe validar correctamente que sea una
            contraseña correcta y que coincidan ambas.
          </h5>
        </li>
        <li>
          <h4>3º Pantalla de feedback</h4>
          <Feedback success />
          <Feedback />
          <p>
            Esta pantalla unicamente mostrará un icono de Ok/Ko informando al
            usuario del resultado, además de un boton que reinicie el proceso.
          </p>
          <p>
            Se provee de un mock en el services/api desde el cual se puede
            imitar el comportamiento de una llamada asíncrona. (Checkear para
            ver caso de error)
          </p>
          <h5>
            Debe ser una pantalla que cumpla cualquier de los requisitos, tanto
            un KO como un OK, de manera dinamica, de manera que, sea
            parametrizable en base al resultado de la creación.
          </h5>
        </li>
      </ul>
      <h3>Requisitos</h3>
      <p>
        Los requisitos que se van a tener en cuenta para la evaluación de la
        prueba son:
      </p>
      <ul>
        <li>
          Tiene que estar maquetada semánticamente correcta, con etiquetas de
          HTML5 y layouts actuales.
        </li>
        <li>
          Se puede renombrar, quitar o añadir cualquier recurso, fichero, asset
          que se crea necesario para mejorar o embellecer la prueba.
        </li>
        <li>La iconografia puede obtenerse de donde guste</li>
        <li>
          Nice to haves a tener en cuenta
          <ul>
            <li>Estructura del proyecto</li>
            <li>Control de la UI durante las llamadas asíncronas</li>
            <li>Generalización de componentes y utilidades</li>
            <li>Uso de buenas practicas de programación</li>
            <li>Metodologias en hojas de estilos</li>
            <li>Sistema de traducción</li>
            <li>Rendimiento</li>
          </ul>
        </li>
      </ul>
      <h3>Recursos</h3>
      <p>
        Se provee un proyecto vacío donde se espera que el desarrollador
        complete la lógica. Ademas se provee de un base.scss con los colores
        corporativos e imágenes para completar los flujos. Todo esto es de libre
        disposición para que el destinatario lo use o no si lo cree conveniente.
      </p>
      <h3>Duración</h3>
      <p>
        No hay una estimación directa ni concreta de la prueba, pero queremos
        marcar como máximo 1 semana(7 días naturales) desde el recibo de la
        misma.
      </p>

      <h4 className="bye-bye">
        Sin más que añadir, ¡mucha suerte! y cualquier duda, mandanos tus dudas
        al correo que te han dado. =)
      </h4>
    </section>
  );
}
