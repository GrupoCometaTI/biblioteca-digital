<script lang="ts" setup>
import { ref } from 'vue';
const referenciaFormulario = ref(null)

const formalarioLogin = ref({
    email: '',
    senha: ''
})

async function Login() {
    try {
        const valid = await referenciaFormulario.value.validate()
        if (!valid.valid)
            return
        // enviar pra api
    } catch (e) {
        console.log(e)
    }
}


function regras(valor: string) {
    if (valor.length >= 8) return true
    return 'A senha precisa ter pelo menos 8 caracteres'
}

function validaEmail() {

}

</script>

<template>
    <v-form ref="referenciaFormulario" @submit.prevent>
        <v-card class="mx-auto mt-15" width="600">

            <v-toolbar color="success">
                <v-card-title>
                    <span>Bem vindo a Biblioteca Digital</span>
                </v-card-title>
            </v-toolbar>
            <v-card-text>

                <v-row>
                    <v-col cols="12">
                        <v-text-field type="email" label="Email" v-model="formalarioLogin.email"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field :rules="[regras]" type="password" label="Senha"
                            v-model="formalarioLogin.senha"></v-text-field>
                    </v-col>
                </v-row>

            </v-card-text>

            <v-card-actions>
                <v-btn variant="outlined" color="info"> Cadastrar</v-btn>
                <v-spacer></v-spacer>
                <v-btn variant="outlined" @click="Login" color="primary">Login</v-btn>
            </v-card-actions>
        </v-card>
    </v-form>
</template>

<style></style>