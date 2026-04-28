<script setup>
import ButtonChild from './ButtonChild.vue';
defineProps(['id', 'nome','preco', 'categoria'])
defineEmits(['corrigirpreco'])
</script>