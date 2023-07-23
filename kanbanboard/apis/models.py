from django.db import models

#Board model - future implementation
# class Board(models.Model):
#     board_id = models.AutoField(primary_key=True)
#     board_name = models.CharField(max_length=255, blank=True, null=True)
#     user = models.ForeignKey('User', models.DO_NOTHING, blank=True, null=True)
#     created_at = models.DateTimeField(blank=True, null=True, auto_now_add=True)
#     updated_at = models.DateTimeField(blank=True, null=True, auto_now_add=True)

#     class Meta:
#         managed = True
#         db_table = 'board'

#Commit model
class Commit(models.Model):
    commit_id = models.AutoField(primary_key=True)
    user = models.ForeignKey('User', models.DO_NOTHING, blank=True, null=True)
    task = models.ForeignKey('Task', models.DO_NOTHING, blank=True, null=True)
    commit_message = models.CharField(max_length=255, blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True, auto_now_add=True)

    class Meta:
        managed = True
        db_table = 'commit'
        
#List model
class List(models.Model):
    column_id = models.IntegerField(primary_key=True)
    # board = models.ForeignKey(Board, models.DO_NOTHING, blank=True, null=True)
    col_name = models.CharField(max_length=255, blank=True, null=True)
    position = models.IntegerField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True, auto_now_add=True)
    updated_at = models.DateTimeField(blank=True, null=True, auto_now_add=True)

    class Meta:
        managed = True
        db_table = 'list'

#Task model
class Task(models.Model):
    task_id = models.AutoField(primary_key=True)
    column = models.ForeignKey(List, models.DO_NOTHING, blank=True, null=True)
    task_name = models.CharField(max_length=255, blank=True, null=True)
    description = models.CharField(max_length=255, blank=True, null=True)
    acceptance_criteria = models.CharField(max_length=255, blank=True, null=True)
    assigner = models.ForeignKey('User', models.DO_NOTHING, db_column='assigner', blank=True, null=True, related_name="assigner")
    assignee = models.ForeignKey('User', models.DO_NOTHING, db_column='assignee', blank=True, null=True, related_name="assignee")
    story_points= models.IntegerField(blank=True, null=True)
    start_date = models.DateField(blank=True, null=True ,auto_now_add=True)
    end_date = models.DateField(blank=True, null=True)
    priority = models.IntegerField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True, auto_now_add=True)
    updated_at = models.DateTimeField(blank=True, null=True, auto_now_add=True)

    class Meta:
        managed = True
        db_table = 'task'

#User model
class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=255, blank=True, null=True)
    email = models.CharField(max_length=255, blank=True, null=True)
    pass_field = models.CharField(db_column='pass', max_length=255, blank=True, null=True)  # Field renamed because it was a Python reserved word.
    created_at = models.DateTimeField(blank=True, null=True, auto_now_add=True)
    updated_at = models.DateTimeField(blank=True, null=True, auto_now_add=True)

    class Meta:
        managed = True
        db_table = 'user'
