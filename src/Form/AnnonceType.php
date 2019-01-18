<?php

namespace App\Form;

use App\Entity\Ad;
use App\Form\ApplicationType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AnnonceType extends ApplicationType
{

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', TextType::class, $this->getConfiguration('Titre', 'Tapez un super titre pour votre annonce'))
            ->add('slug', TextType::class, $this->getConfiguration('Adress web', 'Tapez addresse web (automatique)', [
                'required' => false
            ]))
            ->add('coverImage', UrlType::class, $this->getConfiguration('Url de l\'image principale', 'Donnez  l\'adresse d\'une image qui donne vraiment envie'))
            ->add('introduction', TextType::class, $this->getConfiguration('Introduction', 'Donnez une description globale de l\'annonce'))
            ->add('content', TextType::class, $this->getConfiguration('Description', 'Tapez une description qui donnait vraiment une avis pour venir'))
            ->add('rooms', IntegerType::class, $this->getConfiguration('Nombre de chambres', 'le nombre de chambes disponibles'))
            ->add('price', MoneyType::class, $this->getConfiguration('Prix par nuit', 'indiquez le prix que vous voulez pour une nuit'))
            ->add('images', CollectionType::class, [
                'entry_type' => ImageType::class,
                'allow_add'  => true,
                'allow_delete' => true
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Ad::class,
        ]);
    }
}
