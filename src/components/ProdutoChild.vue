<script setup>
import ButtonChild from './ButtonChild.vue';
defineProps(['id', 'nome','preco', 'categoria'])
defineEmits(['corrigirpreco'])
import { formataPreço } from '@/utils/produtosUtils';
</script>

<template>
    <li>
        ID: {{ id }} - {{ nome }} - {{ formataPreco(preco) }} ({{ categoria }})
        <ButtonChild @clique="$emit('corrigirpreco', id)">Corrigir Preço</ButtonChild>
    </li>
</template>
<style scoped>

</style>