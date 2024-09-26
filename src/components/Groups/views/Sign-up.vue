<template>
    <div class="registro-usuario">
      <h2>Sign Up</h2>
  
      <form @submit.prevent="registrarUsuario">
        <div class="form-group">
          <label for="username">Nombre de Usuario</label>
          <input 
            type="text" 
            id="username" 
            v-model="usuario.username" 
            @input="validarUsername"
            placeholder="Ingrese su nombre de usuario" 
            required 
          />
          <span v-if="errores.username" class="error">{{ errores.username }}</span>
        </div>
  
        
        <div class="form-group">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="usuario.email" 
            @input="validarEmail"
            placeholder="Ingrese su email" 
            required 
          />
          <span v-if="errores.email" class="error">{{ errores.email }}</span>
        </div>
  
       
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input 
            type="password" 
            id="password" 
            v-model="usuario.password" 
            @input="validarPassword"
            placeholder="Ingrese su contraseña" 
            required 
          />
          <span v-if="errores.password" class="error">{{ errores.password }}</span>
        </div>
  
        
        <div class="form-group">
          <button type="submit" :disabled="!formValido">Registrar</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        usuario: {
          username: '',
          email: '',
          password: ''
        },
        errores: {
          username: null,
          email: null,
          password: null
        }
      };
    },
    computed: {
      formValido() {
        
        return !this.errores.username && !this.errores.email && !this.errores.password;
      }
    },
    methods: {
     
      validarUsername() {
        const username = this.usuario.username;
        if (username.length < 4) {
          this.errores.username = 'El nombre de usuario debe tener al menos 4 caracteres.';
        } else {
          this.errores.username = null;
        }
      },
      
      validarEmail() {
        const email = this.usuario.email;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          this.errores.email = 'Ingrese un email válido.';
        } else {
          this.errores.email = null;
        }
      },
     

      
      validarPassword() {
        const password = this.usuario.password;
        if (password.length < 6) {
          this.errores.password = 'La contraseña debe tener al menos 6 caracteres.';
        } else {
          this.errores.password = null;
        }
      },
      


      registrarUsuario() {
        
        if (this.formValido) {
          alert(`Usuario registrado: ${this.usuario.username}`);
        
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .registro-usuario {
    max-width: 400px;
    margin: 0 auto;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
  }
  
  button:disabled {
    background-color: grey;
    cursor: not-allowed;
  }
  
  button:hover:not(:disabled) {
    background-color: #0056b3;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .error {
    color: red;
    font-size: 0.9em;
    margin-top: 5px;
    display: block;
  }
  </style>
  