<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from "axios"

interface Product {
    id: number;
    image: string;
    clothesName: string;
    price: number;
}

export default defineComponent({
    name: 'Cart',
    setup() {
        const cart = ref<any[]>([]);
        const productsUser = ref<Product[]>([]);
        const show = ref(false);

        const fetch = async () => {
            try {
                const res = await axios.get(`http://${process.env.HOST}:${process.env.PORT}/cart/${currentUser.id}`);
                cart.value = res.data;
            } catch (error) {
                console.error('Error fetching cart:', error);
            }
        };

        const fetchProduct = async () => {
            const arr: Product[] = [];
            await fetch();

            if (cart.value.length > 0) {
                for (let i = 0; i < cart.value.length; i++) {
                    try {
                        const res = await axios.get(`http://${process.env.HOST}:${process.env.PORT}/product/${cart.value[i].product_id}`);
                        arr.push(...res.data);
                    } catch (error) {
                        console.error('Error fetching product:', error);
                    }
                }
                productsUser.value = arr;
            }
        };

        const handleDelete = async (productId: number) => {
            try {
                await axios.delete(`http://${process.env.HOST}:${process.env.PORT}/cart/${productId}`);
            } catch (error) {
                console.error('Error deleting from cart:', error);
            }
        };

        const toggleShow = () => {
            show.value = !show.value;
        };

        onMounted(fetchProduct);

        return {
            cart,
            productsUser,
            show,
            handleDelete,
            toggleShow,
        };
    },
});
</script>
