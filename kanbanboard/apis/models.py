# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Board(models.Model):
    board_id = models.IntegerField(primary_key=True)
    board_name = models.CharField(max_length=255, blank=True, null=True)
    user = models.ForeignKey('User', models.DO_NOTHING, blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'board'


class Commit(models.Model):
    commit_id = models.IntegerField(primary_key=True)
    task = models.ForeignKey('Task', models.DO_NOTHING, blank=True, null=True)
    commit_message = models.CharField(max_length=255, blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'commit'


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = True
        db_table = 'django_migrations'


class List(models.Model):
    column_id = models.IntegerField(primary_key=True)
    board = models.ForeignKey(Board, models.DO_NOTHING, blank=True, null=True)
    col_name = models.CharField(max_length=255, blank=True, null=True)
    position = models.IntegerField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'list'


class Task(models.Model):
    task_id = models.IntegerField(primary_key=True)
    column = models.ForeignKey(List, models.DO_NOTHING, blank=True, null=True)
    task_name = models.CharField(max_length=255, blank=True, null=True)
    description = models.CharField(max_length=255, blank=True, null=True)
    acceptance_criteria = models.CharField(max_length=255, blank=True, null=True)
    assigner = models.ForeignKey('User', models.DO_NOTHING, db_column='assigner', blank=True, null=True, related_name="assigner")
    assignee = models.ForeignKey('User', models.DO_NOTHING, db_column='assignee', blank=True, null=True, related_name="assignee")
    start_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)
    priority = models.IntegerField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'task'


class User(models.Model):
    user_id = models.IntegerField(primary_key=True)
    username = models.CharField(max_length=255, blank=True, null=True)
    email = models.CharField(max_length=255, blank=True, null=True)
    pass_field = models.CharField(db_column='pass', max_length=255, blank=True, null=True)  # Field renamed because it was a Python reserved word.
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'user'
