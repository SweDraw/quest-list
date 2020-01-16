import React from 'react';
import { useForm } from 'react-hook-form';

import QuestForm from '../../components/quest-form/quest-form.componet';
import Quest, { QuestProps } from '../../components/quest/Quest.componet';

interface Props {
  questParameterList: QuestProps[];
}

const QuestPage: React.FC<Props> = ({ questParameterList }) => {
  return (
    <section className="quest-page">
      <QuestForm questParameter={questParameterList} />
    </section>
  );
};

export default QuestPage;
