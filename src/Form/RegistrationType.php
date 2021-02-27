<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class RegistrationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('name', TextType::class, [
            'label' => 'Jméno',
            'required' => true,
        ]);

        $builder->add('email', EmailType::class, [
            'label' => 'Email',
            'required' => true,
        ]);
        $builder->add('password', RepeatedType::class, [
            'type' => PasswordType::class,
            'invalid_message' => 'error_pass',
            'first_options' => ['label' => 'Heslo'],
            'second_options' => ['label' => 'Opakovat heslo'],
        ]);

        $builder->add('submit', SubmitType::class, [
            'label' => 'Vytvořit'
        ]);
    }
    /** @inheritdoc */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
            'validation_groups' => ['AppRegistration'],
            'locale' => null,
        ]);
    }

    /** @inheritdoc */
    public function getBlockPrefix()
    {
        return 'app_user_registration';
    }
}