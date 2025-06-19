import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { useMediaQuery } from 'react-responsive'
import { Container, Content, Image, Info, ControlsButtonWrapper, TextWrapper } from './styles'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Tags } from '../../components/Tags'
import { DishControls } from '../../components/DishControls'
import { FiChevronLeft } from 'react-icons/fi'
import DishImg from '../../assets/Dish.png'
import Receipt from '../../assets/icons/Receipt.png'
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api'

export function DishDetail() {
    const [data, setData] = useState();

    const params = useParams();

    const { user } = useAuth();

    const navigate = useNavigate()

    const isDesktop = useMediaQuery({ minWidth: 768 })

    useEffect(() => {
        async function fetchDish() {
            const response = await api.get(`/dishes/${params.id}`)
            setData(response.data)
        }
        fetchDish()
    }, [])

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
                    <Image src={DishImg} alt={"Dish"} />

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
                                        quantity={1}
                                        onIncrement={() => { }}
                                        onDecrement={() => { }}
                                        fontSize="2.2rem"
                                        fontWeight="700"
                                        iconSize={28}
                                    />
                                    <Button
                                        title="pedir ∙ R$ 25,00"
                                        width={isDesktop ? "16.2rem" : "20rem"}
                                        height={isDesktop ? "4.8rem" : "4.2rem"}
                                        marginTop="0px"
                                        fontSize={isDesktop ? "1.4rem" : "1rem"}
                                        onClick={(e) => e.stopPropagation()}
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