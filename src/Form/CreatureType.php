<?php

namespace App\Form;

use App\Entity\Creature;
use App\Entity\Culture;
use App\Entity\Keyword;
use App\Entity\Rarity;
use App\Entity\Set;

use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\ChoiceList\ChoiceList;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Tetranz\Select2EntityBundle\Form\Type\Select2EntityType;

class CreatureType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('code', TextType::class, ['label' => 'Kód karty'])
            ->add('photo', TextType::class, ['label' => 'Fotka karty'])
            ->add('rarity', EntityType::class, [
                'class' => Rarity::class,
                'choice_label' => 'name'
            ])
            ->add('culture', EntityType::class, [
                'class' => Culture::class,
                'choice_label' => 'name'
            ])
            ->add('keywords', Select2EntityType::class, [
                'multiple' => true,
                'class' => Keyword::class,
                'remote_route' => 'autocomplete_keyword',
                'minimum_input_length' => 2,
                'label' => 'Keywords',
                'by_reference' => false,
                'text_property' => 'name'
            ])
            ->add('setOfCard', EntityType::class, [
                'class' => Set::class,
                'choice_label' => 'name'
            ])
            ->add('strength', NumberType::class, ['label' => 'Útok'])
            ->add('twilight', NumberType::class, ['label' => 'Cena'])
            ->add('save', SubmitType::class, ['label' => 'Vytvořit'])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Creature::class,
        ]);
    }
}
