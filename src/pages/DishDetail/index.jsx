import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { useMediaQuery } from 'react-responsive'
import { Container, Content, Image, Info, ControlsButtonWrapper, TextWrapper } from './styles'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Tags } from '../../components/Tags'
import { DishControls } from '../../components/DishControls'
import { FiChevronLeft } from 'react-icons/fi'
import DishPlaceholder from '../../assets/DishPlaceholder.png'
import Receipt from '../../assets/icons/Receipt.png'
import { useAuth } from '../../hooks/auth';
import { useOrders } from '../../hooks/orders';
import { api } from '../../services/api'

export function DishDetail() {
    const [data, setData] = useState();

    const [quantity, setQuantity] = useState(1);

    const params = useParams();

    const { user } = useAuth();

    const navigate = useNavigate()

    const isDesktop = useMediaQuery({ minWidth: 768 })

    const { addOrUpdateOrder, getOrder } = useOrders();

    useEffect(() => {
        async function fetchDish() {
            const response = await api.get(`/dishes/${params.id}`);
            const dish = response.data;
            setData(dish);

            const existing = getOrder(dish.id);
            setQuantity(existing ? existing.quantity : 1);
        }

        fetchDish();
    }, []);

    const handleIncrement = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrement = () => {
        setQuantity(prev => (prev > 0 ? prev - 1 : 0));
    };

    const handleAddToCart = () => {
        const item = {
            id: data.id,
            name: data.name,
            price: data.price,
            image: data.image,
            quantity: quantity
        };

        addOrUpdateOrder(item);

        if (quantity === 0) {
            alert(`"${data.name}" removido do carrinho.`);
        } else {
            alert(`No carrinho agora tem ${quantity} unidade(s) de ${data.name}`);
        }
    };



    const getButtonTitle = () => {

        const isInCart = !!getOrder(data?.id);
        console.log(data)

        const price = (data.price * quantity).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

        if (quantity === 0) {
            return "Remover do carrinho";
        }

        if (isInCart) {
            return `Atualizar carrinho ∙ ${price}`;
        }

        return `Pedir ∙ ${price}`;
    };

    return (
        <Container>

            <ButtonText
                title="voltar"
                icon={FiChevronLeft}
                iconSize={34}
                onClick={() => navigate(-1)}
                $fontWeight={isDesktop ? "700" : "400"}
            />

            {data &&
                <Content>
                    <Image src={data.image ? `${api.defaults.baseURL}/files/${data.image}` : DishPlaceholder} alt={data.name} />

                    <Info>

                        <TextWrapper>
                            <h1>{data.name}</h1>
                            <p>
                                {data.description}
                            </p>
                        </TextWrapper>



                        <Tags items={JSON.parse(data.ingredients)} />

                        <ControlsButtonWrapper>
                            {user.role === "user" && (
                                <>
                                    <DishControls
                                        quantity={quantity}
                                        onIncrement={handleIncrement}
                                        onDecrement={handleDecrement}
                                        fontSize="2.2rem"
                                        fontWeight="700"
                                        iconSize={28}
                                    />
                                    <Button
                                        title={getButtonTitle()}
                                        width={isDesktop ? "16.2rem" : "20rem"}
                                        height={isDesktop ? "4.8rem" : "4.2rem"}
                                        marginTop="0px"
                                        fontSize={isDesktop ? "1.4rem" : "1rem"}
                                        onClick={handleAddToCart}
                                        image={isDesktop ? undefined : Receipt}
                                    />
                                </>
                            )}

                            {user.role === "admin" && (
                                <Button
                                    title="Editar prato"
                                    width={isDesktop ? "16.2rem" : "31.6rem"}
                                    height={isDesktop ? "4.8rem" : "4.2rem"}
                                    marginTop="0px"
                                    fontSize={"1.4rem"}
                                    onClick={() => navigate(`/dish-form/edit/${data.id}`)}
                                />
                            )}
                        </ControlsButtonWrapper>


                    </Info>
                </Content>
            }





        </Container>
    )
}