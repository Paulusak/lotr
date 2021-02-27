<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210215211529 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE block (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL)');
        $this->addSql('CREATE TABLE block_set (block_id INTEGER NOT NULL, set_id INTEGER NOT NULL, PRIMARY KEY(block_id, set_id))');
        $this->addSql('CREATE INDEX IDX_849FECE6E9ED820C ON block_set (block_id)');
        $this->addSql('CREATE INDEX IDX_849FECE610FB0D18 ON block_set (set_id)');
        $this->addSql('CREATE TABLE card (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, rarity_id INTEGER NOT NULL, culture_id INTEGER NOT NULL, set_of_card_id INTEGER NOT NULL, code VARCHAR(255) NOT NULL, photo VARCHAR(255) NOT NULL, type VARCHAR(255) NOT NULL, strength INTEGER DEFAULT NULL, vitality INTEGER DEFAULT NULL, description VARCHAR(1024) DEFAULT NULL, twilight INTEGER DEFAULT NULL, number INTEGER DEFAULT NULL, damage INTEGER DEFAULT NULL)');
        $this->addSql('CREATE INDEX IDX_161498D3F3747573 ON card (rarity_id)');
        $this->addSql('CREATE INDEX IDX_161498D3B108249D ON card (culture_id)');
        $this->addSql('CREATE INDEX IDX_161498D3CC50169A ON card (set_of_card_id)');
        $this->addSql('CREATE TABLE card_keyword (card_id INTEGER NOT NULL, keyword_id INTEGER NOT NULL, PRIMARY KEY(card_id, keyword_id))');
        $this->addSql('CREATE INDEX IDX_D89FB4D4ACC9A20 ON card_keyword (card_id)');
        $this->addSql('CREATE INDEX IDX_D89FB4D115D4552 ON card_keyword (keyword_id)');
        $this->addSql('CREATE TABLE collection_of_user (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_id INTEGER NOT NULL)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_7C872CABA76ED395 ON collection_of_user (user_id)');
        $this->addSql('CREATE TABLE collection_of_user_usercard (collection_of_user_id INTEGER NOT NULL, usercard_id INTEGER NOT NULL, PRIMARY KEY(collection_of_user_id, usercard_id))');
        $this->addSql('CREATE INDEX IDX_67D0D72CF9810AE0 ON collection_of_user_usercard (collection_of_user_id)');
        $this->addSql('CREATE INDEX IDX_67D0D72CD6AD669E ON collection_of_user_usercard (usercard_id)');
        $this->addSql('CREATE TABLE culture (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL, is_evil BOOLEAN NOT NULL)');
        $this->addSql('CREATE TABLE deck (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_id INTEGER NOT NULL, name VARCHAR(255) NOT NULL)');
        $this->addSql('CREATE INDEX IDX_4FAC3637A76ED395 ON deck (user_id)');
        $this->addSql('CREATE TABLE deck_block (deck_id INTEGER NOT NULL, block_id INTEGER NOT NULL, PRIMARY KEY(deck_id, block_id))');
        $this->addSql('CREATE INDEX IDX_42466DCD111948DC ON deck_block (deck_id)');
        $this->addSql('CREATE INDEX IDX_42466DCDE9ED820C ON deck_block (block_id)');
        $this->addSql('CREATE TABLE keyword (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(256) NOT NULL, description VARCHAR(1024) NOT NULL)');
        $this->addSql('CREATE TABLE language (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL)');
        $this->addSql('CREATE TABLE rarity (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL)');
        $this->addSql('CREATE TABLE "set" (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL)');
        $this->addSql('CREATE TABLE state_of_card (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL)');
        $this->addSql('CREATE TABLE user (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL, email VARCHAR(180) NOT NULL, password VARCHAR(255) DEFAULT NULL, roles CLOB NOT NULL --(DC2Type:json)
        , registration_ip VARCHAR(255) DEFAULT NULL, locale VARCHAR(255) NOT NULL)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D649E7927C74 ON user (email)');
        $this->addSql('CREATE TABLE user_card (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, card_id INTEGER NOT NULL, user_id INTEGER NOT NULL, language_id INTEGER NOT NULL, state_id INTEGER NOT NULL)');
        $this->addSql('CREATE INDEX IDX_6C95D41A4ACC9A20 ON user_card (card_id)');
        $this->addSql('CREATE INDEX IDX_6C95D41AA76ED395 ON user_card (user_id)');
        $this->addSql('CREATE INDEX IDX_6C95D41A82F1BAF4 ON user_card (language_id)');
        $this->addSql('CREATE INDEX IDX_6C95D41A5D83CC1 ON user_card (state_id)');
        $this->addSql('CREATE TABLE user_forgotten_password (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, user_id INTEGER DEFAULT NULL, code VARCHAR(255) NOT NULL, valid_to DATETIME NOT NULL, updated_at DATETIME NOT NULL)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_82986BDF77153098 ON user_forgotten_password (code)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_82986BDFA76ED395 ON user_forgotten_password (user_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE block');
        $this->addSql('DROP TABLE block_set');
        $this->addSql('DROP TABLE card');
        $this->addSql('DROP TABLE card_keyword');
        $this->addSql('DROP TABLE collection_of_user');
        $this->addSql('DROP TABLE collection_of_user_usercard');
        $this->addSql('DROP TABLE culture');
        $this->addSql('DROP TABLE deck');
        $this->addSql('DROP TABLE deck_block');
        $this->addSql('DROP TABLE keyword');
        $this->addSql('DROP TABLE language');
        $this->addSql('DROP TABLE rarity');
        $this->addSql('DROP TABLE "set"');
        $this->addSql('DROP TABLE state_of_card');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE user_card');
        $this->addSql('DROP TABLE user_forgotten_password');
    }
}
