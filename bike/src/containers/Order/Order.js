import React from "react";
import { Wrapper, Title, Text } from '../../components/Ui/Ui';
import Form from '../../components/Form/Form';


function Order() {
      return(
        <section>
            <Wrapper>
                <Title  withBorder margin='70px 0 30px'>
                  УСПЕЙ ПЕРВЫМ
                </Title>
                <Text>
                Успей быть в списке первых райдеров, успевших стать владельцами нового FUEL EX 9.8 и ощути все эмоции, переданные будущей легендой даунхилла. При этом первые райдеры, заказавшие новую модель получат дополнительный пакет поддержки на обслуживания от Trek.
                </Text>
                <Form />
            </Wrapper>
        </section>
    );
}

export default Order;