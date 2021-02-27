<?php

namespace App\EventListener;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Form\FormEvent;


class RegistrationListener implements EventSubscriberInterface
{
    public function onRegistrationSuccess(FormEvent $event) {
        $form = $event->getForm();
        $user = $form->getData();
        $request = $event->getRequest();
        $userIP = $request->getClientIp();

        if ($request) {
            $user->setRegistrationIP($userIP);
            $user->setLocale($request->getLocale());
        }
    }

    public static function getSubscribedEvents()
    {
        return [];
    }
}