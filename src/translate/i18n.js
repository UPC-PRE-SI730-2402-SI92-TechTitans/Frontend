import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    homePage: {
      startTitle: "Who are we?",
      sectionOne: {
        paragraph1: "TechTitans presents FinanceGuard, an innovative platform designed to manage both personal and business finances. With the main goal of simplifying money management and improving the financial organization of its users, FinanceGuard offers an intuitive and efficient experience.",
        paragraph2: "The platform allows users to create groups to manage and share expenses collaboratively. Within these groups, expenses can be recorded, specifying who paid and how much, as well as distributing costs among participants. Additionally, FinanceGuard automatically calculates debts and balances, providing a clear view of who owes whom, which is especially useful for roommates, couples, friends, or family members who share expenses in activities such as trips, dinners, rentals, service bills, and joint purchases.",
        paragraph3: "Beyond personal finances, FinanceGuard offers advanced tools for business financial management. These include account reconciliation and the generation of detailed accounting reports, facilitating the tracking and optimization of companies' economic resources.",
        paragraph4: "FinanceGuard empowers its users, both individual and corporate, to take control of their financial well-being, providing them with the necessary tools to track their expenses, set financial goals, and adjust their budgets based on their economic objectives. This comprehensive solution not only improves financial transparency but also promotes greater economic stability, helping users achieve their goals with confidence.",
        paragraph5: "Mission: At FinanceGuard, our mission is to empower individuals and businesses to take charge of their financial well-being through precise, accessible, and easy-to-use management. We are committed to offering innovative solutions that simplify the monitoring, planning, and optimization of financial resources, with the purpose of fostering greater economic security and helping our users achieve their financial goals with certainty.",
        paragraph6: "Vision: We aspire to become the leading platform in personal and business financial management, recognized for our ability to revolutionize the way people and organizations manage their finances. Our goal is to build a future where financial clarity and economic education are within everyone's reach, contributing to economic development and the comprehensive well-being of our users."
      },
      sectionTwo: {
        startSubtitle: "Advantages",
        subscriptionList: {
          item1: "One-month subscription",
          item2: "One-year subscription",
          item3: "Business subscription"
        }
      }
    },
    sidebar: {
      home: "Home",
      groups: "Groups",
      Payments: "Payments",
      transactions: "Transactions",
      contacts: "Contacts"
    },
    groups: {
      createGroup: {
        titleCreate: "Create a new group",
        titleEdit: "Edit existing group",
        name: "Group name",
        description: "Description",
        participants: "Participants",
        placeholderParticipants: "Participant name",
        buttonCancel: "Cancel",
        buttonSave: "Save"
      },
      groupDetail: {
        title: "Group Details:",
        creationDate: "Creation date:",
        expenses: "Expenses",
        participant: "Participant",
        amount: "Amount",
        date: "Date",
        totalBalance: "Total balance",
        pendingPayment: "Pending payment",
        pending: "Pending",
        editExpensesButton: "Edit expenses",
        expensesButtonCancel: "Cancel",
        expensesButtonSave: "Save"
      },
      groupOverview: {
        title: "Groups",
        buttonCreateGroup: "Create group",
        buttonEdit: "Edit",
        buttonDelete: "Delete"
      },
    }
  },
  es: {
    homePage: {
      startTitle: "¿Quines somos?",
      sectionOne: {
        paragraph1: "TechTitans presenta FinanceGuard, una innovadora plataforma diseñada para gestionar tanto las finanzas personales como empresariales. Con el objetivo principal de simplificar la administración del dinero y mejorar la organización financiera de sus usuarios, FinanceGuard ofrece una experiencia intuitiva y eficiente.",
        paragraph2: "La plataforma permite a los usuarios crear grupos para gestionar y compartir gastos de manera colaborativa. Dentro de estos grupos, se pueden registrar gastos, especificar quién pagó y cuánto, así como distribuir los costos entre los participantes. Además, FinanceGuard calcula automáticamente las deudas y saldos, proporcionando una visión clara de quién debe a quién, lo que resulta especialmente útil para compañeros de cuarto, parejas, amigos o familiares que comparten gastos en actividades como viajes, cenas, alquileres, facturas de servicios y compras conjuntas.",
        paragraph3: "Más allá de las finanzas personales, FinanceGuard ofrece herramientas avanzadas para la gestión financiera empresarial. Entre estas, se incluyen la conciliación de cuentas y la generación de reportes contables detallados, facilitando el seguimiento y optimización de los recursos económicos de las empresas.",
        paragraph4: "FinanceGuard empodera a sus usuarios, tanto individuales como corporativos, a tomar el control de su bienestar financiero, brindándoles las herramientas necesarias para seguir sus gastos, establecer metas financieras y ajustar sus presupuestos en función de sus objetivos económicos. Esta solución integral no solo mejora la transparencia financiera, sino que también promueve una mayor estabilidad económica, ayudando a los usuarios a alcanzar sus metas con confianza.",
        paragraph5: "Misión: En FinanceGuard, nuestra misión es capacitar a individuos y empresas para que tomen las riendas de su bienestar financiero mediante una administración precisa, accesible y fácil de usar. Nos comprometemos a ofrecer soluciones innovadoras que simplifiquen el monitoreo, la planificación y la optimización de los recursos financieros, con el propósito de fomentar una mayor seguridad económica y ayudar a nuestros usuarios a cumplir sus objetivos financieros con certeza.",
        paragraph6: "Visión: Aspiramos a convertirnos en la plataforma de referencia en la gestión financiera personal y empresarial, reconocida por nuestra capacidad de revolucionar la manera en que las personas y organizaciones administran sus finanzas. Nuestro objetivo es construir un futuro donde la claridad financiera y la educación económica estén al alcance de todos, contribuyendo al desarrollo económico y al bienestar integral de nuestros usuarios."
      },
      sectionTwo: {
        startSubtitle: "Ventajas",
        suscriptionList: {
          item1: "Suscripción por un mes",
          item2: "Suscripción por un año",
          item3: "Suscripción empresarial"
        }
      }
    },
    sidebar: {
      home: "Inicio",
      groups: "Grupos",
      Payments: "Pagos",
      transactions: "Transacciones",
      contacts: "Contactos"
    },
    groups: {
      createGroup: {
        titleCreate: "Crear un nuevo grupo",
        titleEdit: "Editar grupo existente",
        name: "Nombre del grupo",
        description: "Descripción",
        participants: "Participantes",
        placeholderParticipants: "Nombre del participante",
        buttonCancel: "Cancelar",
        buttonSave: "Guardar"
      },
      groupDetail: {
        title: "Detalles del Grupo:",
        creationDate: "Fecha de creación:",
        expenses: "Gastos",
        participant: "Participante",
        amount: "Cantidad",
        date: "Fecha",
        totalBalance: "Saldo total",
        pendingPayment: "Pago pendiente",
        pending: "Pendiente",
        editExpensesButton: "Editar gastos",
        expensesButtonCancel: "Cancelar",
        expensesButtonSave: "Guardar",
      },
      groupOverview: {
        title: "Grupos",
        buttonCreateGroup: "Crear grupo",
        buttonEdit: "Editar",
        buttonDelete: "Eliminar"
      },
    }
  }
}

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages
})
export default i18n
