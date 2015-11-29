/**
 * Created by sunny on 11/28/15.
 */
angular.module('MorningWorkout')
    .controller('WorkoutController', ['$scope', '$interval',
        function($scope, $interval){

        function Exercise(args){

            this.name = args.name;
            this.title = args.title;
            this.description = args.description;
            this.image = args.image;
            this.related = {};
            this.related.videos = args.videos;
            this.nameSound = args.nameSound;
            this.procedure = args.procedure;
        };

        function WorkoutPlan(args){

            this.excercises = [];
            this.name = args.name;
            this.title = args.title;
            this.restBetweenExercise = args.restBetweenExercise;
        };

        var restExercise;
        var workoutPlan;

        var init = function(){

            startWorkout();

        };
        init();

        var startWorkout = function(){

            workoutPlan = createWorkout();

            restExercise = {
                details: new Exercise({
                    name: "rest",
                    title: "Relax!",
                    description: "Relax a bit!",
                    image: "img/rest.png"
                }),
                duration: workoutPlan.restBetweenExercise
            };

            startExercise(workoutPlan.exercises.shift());
        };

        var createWorkout = function(){

            var workout = new WorkoutPlan({
                name: "7minWorkout",
                title: "7 Minute Morning Workout",
                restBetweenExercise: 10
            });

            workout.excercises.push({
                details: new Excercise({
                    name: "jumpingJacks",
                    title: "Jumping jacks",
                    description: "Jumping Jacks is a useful exercise.",
                    image: "img/JumpingJacks.png",
                    videos: [],
                    variations: [],
                    procedure: ""
                }),
                duration: 30
            });
            //need to add the few more exercise objects

            return workout;
        }

        var startExercise = function(excercisePlan){

            $scope.currentExercise = exercisePlan;
            $scope.currentExerciseDuration = 0;
            $interval(function(){
                ++$scope.currentExerciseDuration;
            }, 1000, $scope.currentExerciseDuration);
        };
    }]);